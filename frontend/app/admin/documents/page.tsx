"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Trash2, 
  Share2,
  Calendar,
  FileText,
  User,
  Tag,
  MoreVertical,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

interface Document {
  id: string;
  title: string;
  type: string;
  template: string;
  author: string;
  createdAt: string;
  lastModified: string;
  status: 'published' | 'draft' | 'archived';
  views: number;
  downloads: number;
  tags: string[];
  content: string;
}

export default function DocumentManagement() {
  const router = useRouter();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  // Mock data - replace with actual API calls
  useEffect(() => {
    setDocuments([
      {
        id: "1",
        title: "Lease Agreement - 123 Main St",
        type: "Lease Agreement",
        template: "Lease/Rental Agreement",
        author: "John Doe",
        createdAt: "2024-01-15",
        lastModified: "2024-01-15",
        status: "published",
        views: 45,
        downloads: 12,
        tags: ["real-estate", "rental", "residential"],
        content: "This lease agreement is made on..."
      },
      {
        id: "2",
        title: "NDA - Tech Project",
        type: "Non-Disclosure Agreement",
        template: "NDA Template",
        author: "Jane Smith",
        createdAt: "2024-01-14",
        lastModified: "2024-01-14",
        status: "published",
        views: 23,
        downloads: 8,
        tags: ["legal", "confidential", "tech"],
        content: "This non-disclosure agreement..."
      },
      {
        id: "3",
        title: "Employment Contract Draft",
        type: "Employment Contract",
        template: "Employment Agreement",
        author: "Admin",
        createdAt: "2024-01-13",
        lastModified: "2024-01-13",
        status: "draft",
        views: 5,
        downloads: 0,
        tags: ["hr", "employment", "draft"],
        content: "This employment agreement draft..."
      },
      {
        id: "4",
        title: "Service Agreement - ABC Corp",
        type: "Service Agreement",
        template: "Service Agreement",
        author: "Mike Johnson",
        createdAt: "2024-01-10",
        lastModified: "2024-01-10",
        status: "archived",
        views: 67,
        downloads: 23,
        tags: ["business", "service", "archived"],
        content: "This service agreement between..."
      }
    ]);
  }, []);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || doc.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleSelectDocument = (docId: string) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) 
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDocuments.length === filteredDocuments.length) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(filteredDocuments.map(doc => doc.id));
    }
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedDocuments.length} documents?`)) {
      setDocuments(documents.filter(doc => !selectedDocuments.includes(doc.id)));
      setSelectedDocuments([]);
      setShowBulkActions(false);
    }
  };

  const handleBulkArchive = () => {
    setDocuments(documents.map(doc => 
      selectedDocuments.includes(doc.id) 
        ? { ...doc, status: 'archived' as const }
        : doc
    ));
    setSelectedDocuments([]);
    setShowBulkActions(false);
  };

  const handleDeleteDocument = (docId: string) => {
    if (confirm("Are you sure you want to delete this document?")) {
      setDocuments(documents.filter(doc => doc.id !== docId));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700';
      case 'draft':
        return 'bg-yellow-100 text-yellow-700';
      case 'archived':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle size={16} />;
      case 'draft':
        return <Clock size={16} />;
      case 'archived':
        return <AlertCircle size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  useEffect(() => {
    setShowBulkActions(selectedDocuments.length > 0);
  }, [selectedDocuments]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Document Management</h2>
          <p className="text-sm text-gray-500 hidden sm:block">Manage and monitor all generated documents</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 w-full sm:w-auto">
            Export All
          </button>
          <button className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition px-6 w-full sm:w-auto">
            Generate Report
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {showBulkActions && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-blue-800">
                {selectedDocuments.length} documents selected
              </span>
              <button
                onClick={() => setSelectedDocuments([])}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear selection
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleBulkArchive}
                className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition text-sm px-4"
              >
                Archive
              </button>
              <button
                onClick={handleBulkDelete}
                className="bg-gradient-to-r from-[#463826] via-[#ad8b5e] to-[#463826] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition text-sm px-4"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Total Documents</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">{documents.length}</p>
            </div>
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Published</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">{documents.filter(d => d.status === 'published').length}</p>
            </div>
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Draft</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">{documents.filter(d => d.status === 'draft').length}</p>
            </div>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">Total Views</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">{documents.reduce((sum, d) => sum + d.views, 0)}</p>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Documents</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Calendar size={16} />
              <span>Date Range</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Tag size={16} />
              <span>Tags</span>
            </button>
          </div>
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedDocuments.length === filteredDocuments.length && filteredDocuments.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Downloads</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedDocuments.includes(doc.id)}
                      onChange={() => handleSelectDocument(doc.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{doc.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        {doc.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {doc.tags.length > 2 && (
                          <span className="text-xs text-gray-500">+{doc.tags.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        {doc.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">{doc.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{doc.template}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-full ${getStatusColor(doc.status)}`}>
                      {getStatusIcon(doc.status)}
                      <span>{doc.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{doc.views}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{doc.downloads}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{doc.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => router.push(`/admin/documents/${doc.id}/preview`)}
                        className="text-blue-500 hover:text-blue-600"
                        title="Preview"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => router.push(`/admin/documents/${doc.id}/edit`)}
                        className="text-gray-500 hover:text-gray-600"
                        title="Edit"
                      >
                        <FileText size={16} />
                      </button>
                      <button
                        className="text-green-500 hover:text-green-600"
                        title="Download"
                      >
                        <Download size={16} />
                      </button>
                      <button
                        className="text-purple-500 hover:text-purple-600"
                        title="Share"
                      >
                        <Share2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteDocument(doc.id)}
                        className="text-red-500 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredDocuments.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No documents found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
