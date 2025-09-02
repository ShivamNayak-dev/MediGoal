import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import {
  BarChart3, Users, FileText, AlertTriangle, CheckCircle, XCircle, Ban, UserCheck, TrendingUp, DollarSign,
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState<'dashboard' | 'campaigns' | 'users' | 'reports'>('dashboard');

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/admin-login" replace />;
  }

  const dashboardStats = {
    totalCampaigns: 156,
    totalDonations: 2847,
    totalUsers: 1234,
    totalRaised: 45623789,
    pendingCampaigns: 12,
    activeCampaigns: 89,
    completedCampaigns: 55,
  };

  const dummyCampaigns = [
    { id: 1, title: 'Help Sarah Fight Leukemia', patientName: 'Sarah Johnson', targetAmount: 500000, raisedAmount: 245000, status: 'PENDING', createdAt: '2024-01-15', creator: 'John Doe' },
    { id: 2, title: 'Heart Surgery for Amit', patientName: 'Amit Patel', targetAmount: 750000, raisedAmount: 320000, status: 'APPROVED', createdAt: '2024-01-10', creator: 'Priya Patel' },
    { id: 3, title: 'Cancer Treatment for Meera', patientName: 'Meera Singh', targetAmount: 600000, raisedAmount: 180000, status: 'REJECTED', createdAt: '2024-01-08', creator: 'Meera Singh' },
    { id: 4, title: 'Kidney Transplant for Ravi', patientName: 'Ravi Gupta', targetAmount: 800000, raisedAmount: 425000, status: 'PENDING', createdAt: '2024-01-12', creator: 'Ravi Gupta' },
  ];

  const dummyUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-01', status: 'ACTIVE', campaignsCreated: 2, totalDonated: 15000 },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', joinDate: '2024-01-05', status: 'ACTIVE', campaignsCreated: 1, totalDonated: 25000 },
    { id: 3, name: 'Suspicious User', email: 'suspicious@example.com', joinDate: '2024-01-20', status: 'BLOCKED', campaignsCreated: 0, totalDonated: 0 },
    { id: 4, name: 'Maria Garcia', email: 'maria@example.com', joinDate: '2024-01-14', status: 'ACTIVE', campaignsCreated: 0, totalDonated: 50000 },
  ];

  const flaggedCampaigns = [
    { id: 1, title: 'Suspicious Medical Campaign', reason: 'Fake medical documents', reportedBy: 'System', reportDate: '2024-01-20', status: 'UNDER_REVIEW' },
    { id: 2, title: 'Duplicate Campaign', reason: 'Same patient, multiple campaigns', reportedBy: 'User Report', reportDate: '2024-01-18', status: 'FLAGGED' },
    { id: 3, title: 'Fraudulent Heart Surgery', reason: 'Invalid hospital documents', reportedBy: 'Medical Team', reportDate: '2024-01-16', status: 'RESOLVED' },
  ];

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard Overview', icon: BarChart3 },
    { key: 'campaigns', label: 'Manage Campaigns', icon: FileText },
    { key: 'users', label: 'Manage Users', icon: Users },
    { key: 'reports', label: 'Reports', icon: AlertTriangle },
  ] as const;

  const handleApproveCampaign = (id: number) => alert(`Campaign ${id} approved!`);
  const handleRejectCampaign = (id: number) => alert(`Campaign ${id} rejected!`);
  const handleBlockUser = (id: number) => alert(`User ${id} blocked!`);
  const handleUnblockUser = (id: number) => alert(`User ${id} unblocked!`);

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#333]">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 border rounded-lg shadow-sm flex justify-between">
          <div>
            <p className="text-sm text-[#666]">Total Campaigns</p>
            <p className="text-3xl font-bold">{dashboardStats.totalCampaigns}</p>
          </div>
          <FileText className="h-10 w-10 text-[#0077B6]" />
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-sm flex justify-between">
          <div>
            <p className="text-sm text-[#666]">Total Users</p>
            <p className="text-3xl font-bold">{dashboardStats.totalUsers}</p>
          </div>
          <Users className="h-10 w-10 text-[#00BFA5]" />
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-sm flex justify-between">
          <div>
            <p className="text-sm text-[#666]">Total Donations</p>
            <p className="text-3xl font-bold">{dashboardStats.totalDonations}</p>
          </div>
          <TrendingUp className="h-10 w-10 text-green-600" />
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-sm flex justify-between">
          <div>
            <p className="text-sm text-[#666]">Total Raised</p>
            <p className="text-xl font-bold">{formatCurrency(dashboardStats.totalRaised)}</p>
          </div>
          <DollarSign className="h-10 w-10 text-[#0077B6]" />
        </div>
      </div>
    </div>
  );

  const renderCampaigns = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#333]">Manage Campaigns</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Campaign</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Target</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Raised</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dummyCampaigns.map((c) => (
              <tr key={c.id}>
                <td className="px-6 py-4">
                  <div className="font-medium text-[#333]">{c.title}</div>
                  <div className="text-sm text-[#666]">by {c.creator}</div>
                </td>
                <td className="px-6 py-4">{formatCurrency(c.targetAmount)}</td>
                <td className="px-6 py-4">{formatCurrency(c.raisedAmount)}</td>
                <td className="px-6 py-4">
                  {c.status === 'PENDING' && <span className="text-yellow-600">Pending</span>}
                  {c.status === 'APPROVED' && <span className="text-green-600">Approved</span>}
                  {c.status === 'REJECTED' && <span className="text-red-600">Rejected</span>}
                </td>
                <td className="px-6 py-4 text-sm text-[#666]">{c.createdAt}</td>
                <td className="px-6 py-4 flex gap-2">
                  {c.status === 'PENDING' && (
                    <>
                      <button
                        onClick={() => handleApproveCampaign(c.id)}
                        className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectCampaign(c.id)}
                        className="flex items-center px-3 py-1 bg-red-100 text-red-700 rounded"
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#333]">Manage Users</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Joined</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dummyUsers.map((u) => (
              <tr key={u.id}>
                <td className="px-6 py-4 font-medium text-[#333]">{u.name}</td>
                <td className="px-6 py-4 text-sm text-[#666]">{u.email}</td>
                <td className="px-6 py-4 text-sm text-[#666]">{u.joinDate}</td>
                <td className="px-6 py-4">
                  {u.status === 'ACTIVE' ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Blocked</span>
                  )}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  {u.status === 'ACTIVE' ? (
                    <button
                      onClick={() => handleBlockUser(u.id)}
                      className="flex items-center px-3 py-1 bg-red-100 text-red-700 rounded"
                    >
                      <Ban className="h-4 w-4 mr-1" />
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnblockUser(u.id)}
                      className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded"
                    >
                      <UserCheck className="h-4 w-4 mr-1" />
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#333]">Flagged Campaigns</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Reason</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Reported By</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#666] uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {flaggedCampaigns.map((f) => (
              <tr key={f.id}>
                <td className="px-6 py-4 font-medium text-[#333]">{f.title}</td>
                <td className="px-6 py-4 text-sm text-[#666]">{f.reason}</td>
                <td className="px-6 py-4 text-sm text-[#666]">{f.reportedBy}</td>
                <td className="px-6 py-4 text-sm text-[#666]">{f.reportDate}</td>
                <td className="px-6 py-4">
                  {f.status === 'UNDER_REVIEW' && <span className="text-yellow-600">Under Review</span>}
                  {f.status === 'FLAGGED' && <span className="text-red-600">Flagged</span>}
                  {f.status === 'RESOLVED' && <span className="text-green-600">Resolved</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 text-xl font-bold text-[#0077B6]">Admin Panel</div>
        <nav className="space-y-1">
          {sidebarItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-100 ${
                activeSection === key ? 'bg-gray-100 text-[#0077B6]' : 'text-[#333]'
              }`}
            >
              <Icon className="h-5 w-5 mr-2" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      <main className="flex-1 p-8 overflow-y-auto">
        {activeSection === 'dashboard' && renderDashboard()}
        {activeSection === 'campaigns' && renderCampaigns()}
        {activeSection === 'users' && renderUsers()}
        {activeSection === 'reports' && renderReports()}
      </main>
    </div>
  );
};

export default AdminPanel;
