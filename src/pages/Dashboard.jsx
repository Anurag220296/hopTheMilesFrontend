import React, { useState, useEffect } from "react";
import {
  Home,
  BarChart,
  Settings,
  LogOut,
  Menu,
  X,
  Users,
} from "lucide-react";
import logo from "../assets/images/logo.jpeg";
import "./Dashboard.css";
import Charts from "./components/Charts";
import DashboardLogin from "./DashboardLogin";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0, cancelled: 0 });
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null); // track logged-in username

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  useEffect(() => {
    if (!loggedInUser) return; // fetch data only after login
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1️⃣ Fetch all bookings
        const bookingsRes = await fetch("https://hop-the-miles-backend.vercel.app/api/bookings");
        const bookingsData = await bookingsRes.json();
        if (bookingsData.bookings) setBookings(bookingsData.bookings);

        // 2️⃣ Fetch all users (optional)
        try {
          const usersRes = await fetch("https://hop-the-miles-backend.vercel.app/api/users");
          const usersData = await usersRes.json();
          if (usersData.users) setUsers(usersData.users);
        } catch {
          console.warn("Users API not available yet");
        }

        // 3️⃣ Calculate booking stats
        const counts = { total: 0, completed: 0, pending: 0, cancelled: 0 };
        bookingsData.bookings?.forEach((b) => {
          counts.total++;
          if (b.paymentStatus === "completed") counts.completed++;
          else if (b.paymentStatus === "pending") counts.pending++;
          else if (b.paymentStatus === "cancelled") counts.cancelled++;
        });
        setStats(counts);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [loggedInUser]);

  const renderContent = () => {
    if (!loggedInUser) return null; // don't render content before login
    if (loading) return <p>Loading data...</p>;

    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="dashboard-header">
              <h2>Hello, {loggedInUser} 👋</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-card total">
                <h3>{stats.total}</h3>
                <p>Total Bookings</p>
              </div>
              <div className="stat-card completed">
                <h3>{stats.completed}</h3>
                <p>Completed</p>
              </div>
              <div className="stat-card pending">
                <h3>{stats.pending}</h3>
                <p>Pending</p>
              </div>
              <div className="stat-card cancelled">
                <h3>{stats.cancelled}</h3>
                <p>Cancelled</p>
              </div>
            </div>

            <div className="recent-section">
              <h3>Recent Bookings</h3>
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length > 0 ? (
                    bookings.slice(0, 10).map((b, i) => (
                      <tr key={i}>
                        <td>{b.firstName || "N/A"}</td>
                        <td>{b.stops.length || "N/A"}</td>
                        <td>{b.createdAt ? new Date(b.createdAt).toLocaleDateString() : "—"}</td>
                        <td className={`status ${b.paymentStatus?.toLowerCase() || ""}`}>
                          {b.orderStatus || "Unknown"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No bookings found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        );

      case "users":
        return (
          <div className="settings-tab">
            <h3>Manage Users</h3>
            {users.length > 0 ? (
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={i}>
                      <td>{u.first_name} {u.last_name}</td>
                      <td>{u.email}</td>
                      <td>{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No users found.</p>
            )}
          </div>
        );

      case "analytics":
        return (
          <div className="settings-tab">
            <h3>Analytics Dashboard</h3>
            <Charts bookings={bookings} />
          </div>
        );

      case "settings":
        return (
          <div className="settings-tab">
            <h3>Dashboard Settings</h3>
            <p>Configuration options will be added soon.</p>
          </div>
        );

      default:
        return null;
    }
  };

  if (!loggedInUser) return <DashboardLogin onLogin={handleLogin} />;

  return (
    <div className="dashboard-wrapper">
      <aside className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div>
          <div className="sidebar-header">
            <img src={logo} alt="Logo" className="sidebar-logo" />
            <h2>HopTheMiles</h2>
          </div>

          <nav className="sidebar-nav">
            <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>
              <Home size={18} /> Overview
            </button>
            <button className={activeTab === "users" ? "active" : ""} onClick={() => setActiveTab("users")}>
              <Users size={18} /> Users
            </button>
            <button className={activeTab === "analytics" ? "active" : ""} onClick={() => setActiveTab("analytics")}>
              <BarChart size={18} /> Analytics
            </button>
            <button className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>
              <Settings size={18} /> Settings
            </button>
          </nav>
        </div>

        <button className="logout-btn" onClick={() => setLoggedInUser(null)}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      <main className="dashboard-content">
        <div className="mobile-header">
          <button className="menu-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
        </div>

        {renderContent()}

        <footer className="dashboard-footer">
          © {new Date().getFullYear()} HopTheMiles. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
