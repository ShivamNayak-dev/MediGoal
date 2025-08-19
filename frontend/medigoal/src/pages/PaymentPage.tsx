import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building, Shield, ArrowLeft } from 'lucide-react';
import { mockCampaigns } from '../data/mockData';

const PaymentPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');

  const campaign = mockCampaigns.find(c => c.id === id);

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">Campaign Not Found</h2>
          <button onClick={() => navigate('/browse')} className="text-[#0077B6] hover:underline">
            Browse other fundraisers
          </button>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment-success', { 
        state: { 
          amount: parseInt(amount), 
          campaignTitle: campaign.title,
          patientName: campaign.patientName 
        } 
      });
    }, 2000);
  };

  const suggestedAmounts = [1000, 2500, 5000, 10000, 25000];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#0077B6] hover:text-[#005a8a] mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Campaign</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Campaign Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">Your Donation</h2>
            
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src={campaign.image} 
                alt={campaign.patientName}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-[#333333] mb-1">{campaign.title}</h3>
                <p className="text-[#666666] text-sm mb-2">
                  Help {campaign.patientName} get the medical treatment they need
                </p>
                <div className="text-sm text-[#666666]">
                  <span className="text-[#28A745] font-semibold">
                    {formatCurrency(campaign.raisedAmount)}
                  </span>
                  {' '}raised of {formatCurrency(campaign.targetAmount)} goal
                </div>
              </div>
            </div>

            {/* Donation Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#333333] mb-3">
                Donation Amount
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {suggestedAmounts.map((suggestedAmount) => (
                  <button
                    key={suggestedAmount}
                    onClick={() => setAmount(suggestedAmount.toString())}
                    className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                      amount === suggestedAmount.toString()
                        ? 'border-[#0077B6] bg-[#0077B6] text-white'
                        : 'border-gray-300 hover:border-[#0077B6] text-[#333333]'
                    }`}
                  >
                    ₹{suggestedAmount.toLocaleString()}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute left-3 top-3 text-[#666666]">₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-[#0077B6] border-gray-300 rounded focus:ring-[#0077B6]"
                />
                <label htmlFor="anonymous" className="text-sm text-[#333333]">
                  Donate anonymously
                </label>
              </div>

              {!isAnonymous && (
                <>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                  />
                </>
              )}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">Payment Method</h2>
            
            <form onSubmit={handlePayment}>
              {/* Payment Method Selection */}
              <div className="space-y-3 mb-6">
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-[#0077B6] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-[#0077B6]"
                  />
                  <CreditCard className="h-6 w-6 text-[#0077B6]" />
                  <span className="font-medium text-[#333333]">Credit/Debit Card</span>
                </div>
                
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'upi'
                      ? 'border-[#0077B6] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="text-[#0077B6]"
                  />
                  <Smartphone className="h-6 w-6 text-[#0077B6]" />
                  <span className="font-medium text-[#333333]">UPI</span>
                </div>
                
                <div
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'netbanking'
                      ? 'border-[#0077B6] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={paymentMethod === 'netbanking'}
                    onChange={() => setPaymentMethod('netbanking')}
                    className="text-[#0077B6]"
                  />
                  <Building className="h-6 w-6 text-[#0077B6]" />
                  <span className="font-medium text-[#333333]">Net Banking</span>
                </div>
              </div>

              {/* Payment Form Fields */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                  />
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g., yourname@paytm)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                  />
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="mb-6">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent">
                    <option value="">Select Your Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="pnb">Punjab National Bank</option>
                  </select>
                </div>
              )}

              {/* Security Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Secure Payment</span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>

              {/* Total and Submit */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-[#333333]">Total Donation:</span>
                  <span className="text-2xl font-bold text-[#0077B6]">
                    {amount ? formatCurrency(parseInt(amount)) : '₹0'}
                  </span>
                </div>
                
                <button
                  type="submit"
                  disabled={!amount || parseInt(amount) <= 0}
                  className="w-full px-6 py-4 bg-[#00BFA5] text-white rounded-lg font-semibold text-lg hover:bg-[#00a693] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Donate {amount ? formatCurrency(parseInt(amount)) : ''}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;