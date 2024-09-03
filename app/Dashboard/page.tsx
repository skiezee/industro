"use client"
import DashboardLayout from "../components/DashboardLayout/dashboardLayout";
import ActivityChart from "../components/ActivityChart/activityChart";
import JobApplyChart from "../components/DoughnutChart/doughnutChart";
import RecentApplication from "../components/RecentApplication/recentApplication";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold">
            Welcome Back, <span className="text-red-500">Musyafa!</span> 👋
          </h1>
          <p className="text-gray-500">
            Here’s an overview of your Industro services today.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-4">Activity analytics</h2>
          <ActivityChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Job apply analytics</h2>
          <JobApplyChart />
        </div>
        <RecentApplication />
      </div>
    </DashboardLayout>
  );
}
