import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Charts = ({ bookings }) => {
  // Prepare data for chart
  const chartData = bookings.reduce((acc, booking) => {
    const date = new Date(booking.createdAt).toLocaleDateString();
    const existing = acc.find((d) => d.date === date);
    if (existing) {
      existing.total += 1;
      if (booking.paymentStatus === "completed") existing.completed += 1;
      else if (booking.paymentStatus === "pending") existing.pending += 1;
      else if (booking.paymentStatus === "cancelled") existing.cancelled += 1;
    } else {
      acc.push({
        date,
        total: 1,
        completed: booking.paymentStatus === "completed" ? 1 : 0,
        pending: booking.paymentStatus === "pending" ? 1 : 0,
        cancelled: booking.paymentStatus === "cancelled" ? 1 : 0,
      });
    }
    return acc;
  }, []);

  return (
    <div className="charts-wrapper">
      <h3>Booking Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#1e40af" />
          <Line type="monotone" dataKey="completed" stroke="#16a34a" />
          <Line type="monotone" dataKey="pending" stroke="#d97706" />
          <Line type="monotone" dataKey="cancelled" stroke="#dc2626" />
        </LineChart>
      </ResponsiveContainer>

      <h3>Booking Status Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="completed" fill="#16a34a" />
          <Bar dataKey="pending" fill="#d97706" />
          <Bar dataKey="cancelled" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
