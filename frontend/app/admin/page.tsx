"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  FileText, 
  Layout, 
  Settings, 
  BarChart3, 
  LogOut,
  Menu,
  X,
  Palette,
  MousePointer,
  Type,
  Shield,
  Plus,
  CheckCircle,
  Clock,
  Eye,
  Search,
  Filter,
  Download,
  Trash2
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDocuments: 0,
    totalTemplates: 0,
    activeUsers: 0
  });

  // Auto-close sidebar on small screens, open on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Load admin stats
    setStats({
      totalUsers: 1234,
      totalDocuments: 5678,
      totalTemplates: 12,
      activeUsers: 234
    });
  }, []);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "users", label: "User Management", icon: Users },
    { id: "documents", label: "Document Management", icon: FileText },
    { id: "templates", label: "Template Management", icon: Layout },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "security", label: "Security", icon: Shield },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    // Clear admin session
    localStorage.removeItem("adminToken");
    router.push("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Total Users</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{stats.totalUsers}</p>
                  </div>
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Total Documents</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{stats.totalDocuments}</p>
                  </div>
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Templates</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{stats.totalTemplates}</p>
                  </div>
                  <Layout className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Active Users</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{stats.activeUsers}</p>
                  </div>
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">New user registered</p>
                    <p className="text-xs text-gray-500">john.doe@email.com - 2 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">New</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Document created</p>
                    <p className="text-xs text-gray-500">Lease Agreement - 1 hour ago</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Document</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Template updated</p>
                    <p className="text-xs text-gray-500">NDA Template - 3 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Template</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "users":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">User Management</h2>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                />
                <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-6 w-full sm:w-auto">
                  <Plus size={20} />
                  <span>Add User</span>
                </button>
              </div>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                            JD
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-800">John Doe</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.doe@email.com</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1 px-3 text-xs">
                            Edit
                          </button>
                          <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1 px-3 text-xs">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        JD
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-semibold text-gray-800">John Doe</h3>
                        <p className="text-xs text-gray-500">john.doe@email.com</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>Joined: 2024-01-15</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition text-xs">
                      Edit
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition text-xs">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "documents":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Document Management</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Total Documents</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">1,234</p>
                  </div>
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Published</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">892</p>
                  </div>
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Draft</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">156</p>
                  </div>
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                </div>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Total Views</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">5,678</p>
                  </div>
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Filter size={20} className="text-gray-400" />
                    <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Documents</option>
                      <option>Published</option>
                      <option>Draft</option>
                      <option>Archived</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    Export All
                  </button>
                  <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition px-6">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>

            {/* Documents List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-800">Lease Agreement - 123 Main St</p>
                          <p className="text-xs text-gray-500">Real Estate</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                            JD
                          </div>
                          <span className="text-sm text-gray-600">John Doe</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Published</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">45</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-500 hover:text-blue-600">
                            <Eye size={16} />
                          </button>
                          <button className="text-gray-500 hover:text-gray-600">
                            <Download size={16} />
                          </button>
                          <button className="text-red-500 hover:text-red-600">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4 p-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-800">Lease Agreement - 123 Main St</h3>
                      <p className="text-xs text-gray-500">Real Estate</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Published</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        JD
                      </div>
                      <span>John Doe</span>
                    </div>
                    <span>45 views</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition text-xs flex items-center justify-center gap-1">
                      <Eye size={14} />
                      View
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition text-xs flex items-center justify-center gap-1">
                      <Download size={14} />
                      Download
                    </button>
                    <button className="flex-1 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition text-xs flex items-center justify-center gap-1">
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "templates":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Template Management</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center py-8">
                <Layout className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Advanced template management available in dedicated section</p>
                <button 
                  onClick={() => router.push("/admin/templates")}
                  className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-6"
                >
                  Go to Template Management
                </button>
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Security Settings</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Authentication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                      </div>
                      <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-4">
                        Enable
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Session Timeout</p>
                        <p className="text-sm text-gray-500">Automatically log out inactive users</p>
                      </div>
                      <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Access Control</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">IP Whitelist</p>
                        <p className="text-sm text-gray-500">Restrict access to specific IP addresses</p>
                      </div>
                      <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-4">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">General Settings</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">System Configuration</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Maintenance Mode</p>
                        <p className="text-sm text-gray-500">Temporarily disable the application</p>
                      </div>
                      <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-4">
                        Disable
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Email Notifications</p>
                        <p className="text-sm text-gray-500">Send system notifications to users</p>
                      </div>
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Enabled
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Backup & Recovery</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Auto Backup</p>
                        <p className="text-sm text-gray-500">Last backup: 2 hours ago</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Backup Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "appearance":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Appearance Settings</h2>
            
            {/* Color Theme */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Color Theme</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website Background Color</label>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <input
                      type="color"
                      defaultValue="#F6F2ED"
                      className="w-16 h-16 sm:w-12 sm:h-12 rounded cursor-pointer mx-auto sm:mx-0"
                    />
                    <input
                      type="text"
                      defaultValue="#F6F2ED"
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Page Background Color</label>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <input
                      type="color"
                      defaultValue="#FFFFFF"
                      className="w-16 h-16 sm:w-12 sm:h-12 rounded cursor-pointer mx-auto sm:mx-0"
                    />
                    <input
                      type="text"
                      defaultValue="#FFFFFF"
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Color (Light Brown)</label>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <input
                      type="color"
                      defaultValue="#8F7B66"
                      className="w-16 h-16 sm:w-12 sm:h-12 rounded cursor-pointer mx-auto sm:mx-0"
                    />
                    <input
                      type="text"
                      defaultValue="#8F7B66"
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Button Styles */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Styles</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Border Radius</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Square (0px)</option>
                    <option selected>Rounded (8px)</option>
                    <option>Very Rounded (12px)</option>
                    <option>Pill (999px)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Size</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Small</option>
                    <option selected>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option selected>Sans-serif</option>
                    <option>Serif</option>
                    <option>Monospace</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Base Font Size</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>14px</option>
                    <option selected>16px</option>
                    <option>18px</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-6 w-full sm:w-auto">
                Save Changes
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F2ED] flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-transparent bg-opacity-0.5 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}    

      {/* Sidebar */}
      <div className={`fixed lg:relative bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-50 ${
        sidebarOpen ? 'w-64 translate-x-0' : 'w-16 -translate-x-full lg:translate-x-0'
      } h-screen lg:h-auto overflow-y-auto`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className={`font-bold text-gray-800 transition-all duration-300 ${
              sidebarOpen ? 'text-lg' : 'text-sm'
            }`}>
              {sidebarOpen ? 'LexiGuard Admin' : ''}
            </h1>
            {/* Always show toggle button on desktop, conditionally on mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white hover:opacity-90 transition flex-shrink-0`}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      // Auto-close sidebar on mobile after selection
                      if (window.innerWidth < 768) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                  >
                    <Icon size={20} />
                    {sidebarOpen && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white hover:opacity-90 transition">
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white hover:opacity-90 transition"
              >
                <Menu size={20} />
              </button>
              
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Manage your application</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-2 sm:py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 px-3 sm:px-6 text-sm sm:text-base">
                <span className="hidden sm:inline">Save All Changes</span>
                <span className="sm:hidden">Save</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-3 sm:p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
