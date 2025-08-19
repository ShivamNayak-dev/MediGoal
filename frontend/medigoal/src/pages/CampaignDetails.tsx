import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Share2, FileText, MessageCircle, TrendingUp, Heart } from 'lucide-react';
import { mockCampaigns } from '../data/mockData';

const CampaignDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('about');
  
  const campaign = mockCampaigns.find(c => c.id === id);

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">Campaign Not Found</h2>
          <Link to="/browse" className="text-[#0077B6] hover:underline">
            Browse other fundraisers
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.min((campaign.raisedAmount / campaign.targetAmount) * 100, 100);
  const remainingAmount = Math.max(campaign.targetAmount - campaign.raisedAmount, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const tabs = [
    { key: 'about', label: 'About', icon: FileText },
    { key: 'documents', label: 'Documents', icon: FileText },
    { key: 'updates', label: 'Updates', icon: TrendingUp },
    { key: 'comments', label: 'Comments', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Campaign Header */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <img 
                src={campaign.image} 
                alt={campaign.patientName}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#333333] mb-2">
                      {campaign.title}
                    </h1>
                    <div className="flex items-center text-[#666666] text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{campaign.city}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Created {new Date(campaign.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-lg text-[#333333]">
                      <strong>{campaign.patientName}</strong>, Age {campaign.age}
                    </p>
                    <p className="text-[#666666]">{campaign.condition}</p>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 text-[#0077B6] border border-[#0077B6] rounded-lg hover:bg-[#0077B6] hover:text-white transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Progress Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-[#28A745]">
                      {formatCurrency(campaign.raisedAmount)}
                    </span>
                    <span className="text-[#666666]">
                      raised of {formatCurrency(campaign.targetAmount)} goal
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                    <div 
                      className="progress-bar-fill h-4 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-[#333333]">{formatCurrency(remainingAmount)}</p>
                      <p className="text-sm text-[#666666]">Still needed</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#333333]">{campaign.contributors.length}</p>
                      <p className="text-sm text-[#666666]">Supporters</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#333333]">{progressPercentage.toFixed(1)}%</p>
                      <p className="text-sm text-[#666666]">Funded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                          activeTab === tab.key
                            ? 'border-[#0077B6] text-[#0077B6]'
                            : 'border-transparent text-[#666666] hover:text-[#333333] hover:border-gray-300'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'about' && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">Patient Story</h3>
                    <div className="prose max-w-none">
                      <p className="text-[#666666] leading-relaxed text-lg">
                        {campaign.story}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">Verified Medical Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {campaign.documents.map((doc, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-8 w-8 text-[#0077B6]" />
                            <div>
                              <p className="font-medium text-[#333333]">{doc}</p>
                              <p className="text-sm text-[#666666]">Medical Document</p>
                            </div>
                          </div>
                          <button className="mt-3 text-[#0077B6] hover:underline text-sm">
                            View Document
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'updates' && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">Updates</h3>
                    {campaign.updates.length > 0 ? (
                      <div className="space-y-6">
                        {campaign.updates.map((update) => (
                          <div key={update.id} className="border-l-4 border-[#0077B6] pl-6 pb-6">
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar className="h-4 w-4 text-[#666666]" />
                              <span className="text-sm text-[#666666]">
                                {new Date(update.date).toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="text-lg font-semibold text-[#333333] mb-2">
                              {update.title}
                            </h4>
                            <p className="text-[#666666]">{update.content}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[#666666] italic">No updates available yet.</p>
                    )}
                  </div>
                )}

                {activeTab === 'comments' && (
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">Comments & Support</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#0077B6] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">A</span>
                          </div>
                          <div>
                            <p className="font-medium text-[#333333]">Anonymous Donor</p>
                            <p className="text-sm text-[#666666]">2 days ago</p>
                          </div>
                        </div>
                        <p className="text-[#666666]">
                          Praying for a speedy recovery. Stay strong! 🙏
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#00BFA5] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">J</span>
                          </div>
                          <div>
                            <p className="font-medium text-[#333333]">John Smith</p>
                            <p className="text-sm text-[#666666]">3 days ago</p>
                          </div>
                        </div>
                        <p className="text-[#666666]">
                          Happy to contribute to this cause. Hope everything goes well with the treatment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-[#666666] mb-3">Add your support message</p>
                      <textarea 
                        rows={3}
                        placeholder="Write a message of support..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      />
                      <button className="mt-3 px-4 py-2 bg-[#0077B6] text-white rounded-lg hover:bg-[#005a8a] transition-colors duration-200">
                        Post Comment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contribution Button */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Link
                  to={`/donate/${campaign.id}`}
                  className="w-full block text-center px-6 py-4 bg-[#00BFA5] text-white rounded-lg font-semibold text-lg hover:bg-[#00a693] transition-colors duration-200 mb-4"
                >
                  Contribute Now
                </Link>
                <p className="text-sm text-[#666666] text-center">
                  Your contribution is secure and helps save lives
                </p>
              </div>

              {/* Top Contributors */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#333333] mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-[#0077B6] mr-2" />
                  Top Contributors
                </h3>
                <div className="space-y-3">
                  {campaign.contributors.slice(0, 5).map((contributor, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {contributor.name[0]}
                          </span>
                        </div>
                        <span className="text-[#333333] font-medium">
                          {contributor.isAnonymous ? 'Anonymous' : contributor.name}
                        </span>
                      </div>
                      <span className="text-[#00BFA5] font-semibold">
                        {formatCurrency(contributor.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#333333] mb-4">Trust & Safety</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-[#666666]">Medical documents verified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-[#666666]">Identity verified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-[#666666]">Secure payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;