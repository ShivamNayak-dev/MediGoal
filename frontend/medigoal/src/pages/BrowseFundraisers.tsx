import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import CampaignCard from '../components/CampaignCard';
import { mockCampaigns, type Campaign } from '../data/mockData';

const BrowseFundraisers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>(mockCampaigns);
  const location = useLocation();

  useEffect(() => {
    // Get search query from URL params
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = mockCampaigns;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    switch (selectedFilter) {
      case 'urgent':
        filtered = filtered.filter(campaign => campaign.isUrgent);
        break;
      case 'children':
        filtered = filtered.filter(campaign => campaign.category === 'children');
        break;
      case 'critical':
        filtered = filtered.filter(campaign => campaign.category === 'critical');
        break;
      case 'recent':
        filtered = filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      default:
        break;
    }

    setFilteredCampaigns(filtered);
  }, [searchQuery, selectedFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality is handled by useEffect
  };

  const filters = [
    { key: 'all', label: 'All Fundraisers' },
    { key: 'urgent', label: 'Most Urgent' },
    { key: 'children', label: 'Children' },
    { key: 'critical', label: 'Critical Illness' },
    { key: 'recent', label: 'Recently Added' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Browse Fundraisers
          </h1>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Find and support medical fundraisers that need your help. 
            Every donation brings hope and healing to those in need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search fundraisers by name, condition, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 pr-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-[#0077B6]" />
                <h3 className="text-lg font-semibold text-[#333333]">Filters</h3>
              </div>
              
              <div className="space-y-3">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedFilter === filter.key
                        ? 'bg-[#0077B6] text-white'
                        : 'text-[#666666] hover:bg-gray-50'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                <h4 className="font-semibold text-[#333333] mb-2">Need Help?</h4>
                <p className="text-sm text-[#666666] mb-3">
                  Contact our support team for assistance with donations or fundraising.
                </p>
                <button className="text-sm text-[#0077B6] font-semibold hover:underline">
                  Get Support
                </button>
              </div>
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#333333]">
                {filteredCampaigns.length} fundraiser{filteredCampaigns.length !== 1 ? 's' : ''} found
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6]">
                <option>Sort by: Most Recent</option>
                <option>Sort by: Most Urgent</option>
                <option>Sort by: Highest Goal</option>
                <option>Sort by: Nearly Funded</option>
              </select>
            </div>

            {filteredCampaigns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-[#333333] mb-2">
                  No fundraisers found
                </h3>
                <p className="text-[#666666] mb-6">
                  Try adjusting your search criteria or browse all fundraisers.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFilter('all');
                  }}
                  className="px-6 py-3 bg-[#0077B6] text-white rounded-lg hover:bg-[#005a8a] transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseFundraisers;