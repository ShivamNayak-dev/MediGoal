
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Share2, Home, Heart } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const { amount, campaignTitle, patientName } = location.state || {};

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const shareMessage = `I just donated ${formatCurrency(amount)} to help ${patientName}. Join me in supporting this cause!`;

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(shareMessage)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(window.location.origin)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + window.location.origin)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-[#333333] mb-4">
            Thank You for Your Donation!
          </h1>
          
          {amount && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <p className="text-lg text-[#333333] mb-2">
                You have successfully donated
              </p>
              <p className="text-3xl font-bold text-green-600 mb-2">
                {formatCurrency(amount)}
              </p>
              {campaignTitle && (
                <p className="text-[#666666]">
                  to support <strong>{campaignTitle}</strong>
                </p>
              )}
            </div>
          )}

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-[#666666]">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Your generosity will make a real difference</span>
            </div>
            <p className="text-[#666666]">
              You will receive a confirmation email with your donation receipt shortly.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t pt-8 mb-8">
            <h3 className="text-xl font-semibold text-[#333333] mb-4">
              Help spread the word
            </h3>
            <p className="text-[#666666] mb-6">
              Share this fundraiser with your friends and family to help raise more funds.
            </p>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={shareOnFacebook}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Share2 className="h-4 w-4" />
                <span>Facebook</span>
              </button>
              
              <button
                onClick={shareOnTwitter}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
              >
                <Share2 className="h-4 w-4" />
                <span>Twitter</span>
              </button>
              
              <button
                onClick={shareOnWhatsApp}
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Share2 className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#0077B6] text-white rounded-lg hover:bg-[#005a8a] transition-colors duration-200"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            
            <Link
              to="/browse"
              className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[#0077B6] text-[#0077B6] rounded-lg hover:bg-[#0077B6] hover:text-white transition-colors duration-200"
            >
              <Heart className="h-4 w-4" />
              <span>Support More Causes</span>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-[#666666]">
              Your donation is secure and will be processed within 24-48 hours. 
              You can track the progress of this campaign anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;