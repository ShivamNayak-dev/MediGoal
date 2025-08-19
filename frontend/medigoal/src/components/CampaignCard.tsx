import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users } from 'lucide-react';
import { type Campaign } from '../data/mockData';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const progressPercentage = Math.min((campaign.raisedAmount / campaign.targetAmount) * 100, 100);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const daysAgo = Math.floor((Date.now() - new Date(campaign.createdAt).getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={campaign.image} 
          alt={campaign.patientName}
          className="w-full h-48 object-cover"
        />
        {campaign.isUrgent && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Urgent
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          {campaign.category === 'children' ? 'Children' : 
           campaign.category === 'critical' ? 'Critical' : 'General'}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#333333] mb-2 line-clamp-2">
            {campaign.title}
          </h3>
          <div className="flex items-center text-[#666666] text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{campaign.city}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{daysAgo} days ago</span>
          </div>
          <p className="text-[#666666] text-sm line-clamp-3">
            {campaign.story}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-[#666666] mb-2">
            <span>Raised: {formatCurrency(campaign.raisedAmount)}</span>
            <span>Goal: {formatCurrency(campaign.targetAmount)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="progress-bar-fill h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#28A745] font-semibold">
              {progressPercentage.toFixed(1)}% raised
            </span>
            <div className="flex items-center text-[#666666]">
              <Users className="h-4 w-4 mr-1" />
              <span>{campaign.contributors.length} supporters</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/campaign/${campaign.id}`}
          className="w-full block text-center px-6 py-3 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005a8a] transition-colors duration-200"
        >
          Continue/Donate
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;