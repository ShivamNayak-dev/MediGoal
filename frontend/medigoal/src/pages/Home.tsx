
import { Link } from 'react-router-dom';
import { Heart, Users, TrendingUp, ArrowRight } from 'lucide-react';
import CampaignCard from '../components/CampaignCard';
import { mockCampaigns, statistics } from '../data/mockData';

const Home = () => {
  const featuredCampaigns = mockCampaigns.slice(0, 3);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#333333] leading-tight mb-6">
                Raise Funds for Medical Treatment with{' '}
                <span className="text-[#0077B6]">Transparency</span> &{' '}
                <span className="text-[#00BFA5]">Trust</span>
              </h1>
              <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                Start a fundraiser in minutes and get real-time donor support. 
                Help patients get the medical care they need with our secure and transparent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/start-fundraiser"
                  className="px-8 py-4 bg-[#00BFA5] text-white rounded-lg font-semibold hover:bg-[#00a693] transition-all duration-200 text-center"
                >
                  Start a Fundraiser
                </Link>
                <Link
                  to="/browse"
                  className="px-8 py-4 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005a8a] transition-all duration-200 text-center"
                >
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4269365/pexels-photo-4269365.jpeg"
                alt="Healthcare professionals helping patients"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-8 w-8 text-[#0077B6]" />
                  <div>
                    <p className="font-semibold text-[#333333]">Lives Saved</p>
                    <p className="text-2xl font-bold text-[#00BFA5]">{statistics.livesSaved.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <TrendingUp className="h-12 w-12 text-[#0077B6] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#333333] mb-2">
                {statistics.fundraisersCreated.toLocaleString()}
              </h3>
              <p className="text-[#666666] font-medium">Fundraisers Created</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
              <Heart className="h-12 w-12 text-[#00BFA5] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#333333] mb-2">
                {statistics.livesSaved.toLocaleString()}
              </h3>
              <p className="text-[#666666] font-medium">Lives Saved</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <Users className="h-12 w-12 text-[#28A745] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#333333] mb-2">
                {formatCurrency(statistics.totalRaised)}
              </h3>
              <p className="text-[#666666] font-medium">Total Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fundraisers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Featured Fundraisers
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Help these patients get the medical care they urgently need. 
              Every contribution makes a difference in saving lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/browse"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005a8a] transition-all duration-200"
            >
              <span>View All Fundraisers</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;