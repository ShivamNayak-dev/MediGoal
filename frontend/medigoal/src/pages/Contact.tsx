import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@medcare.com',
      description: 'For general inquiries and support'
    },
    {
      icon: Phone,
      title: 'Helpline Number',
      details: '+91 1800-123-4567',
      description: 'Available 24/7 for urgent assistance'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: '123 Healthcare Plaza, Mumbai, Maharashtra 400001',
      description: 'Visit us during business hours (9 AM - 6 PM)'
    }
  ];

  const faqs = [
    {
      question: 'How do I start a fundraiser?',
      answer: 'Click on "Start a Fundraiser" button, fill in the patient details, upload medical documents, and submit for verification.'
    },
    {
      question: 'How long does verification take?',
      answer: 'Our medical team typically reviews and approves campaigns within 24 hours.'
    },
    {
      question: 'What are the platform fees?',
      answer: 'We charge only 1-2% platform fee on successful donations to cover operational costs.'
    },
    {
      question: 'How do I withdraw funds?',
      answer: 'Funds can be withdrawn directly to your bank account after campaign approval within 2-3 business days.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Have questions or need support? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-[#333333] mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#333333] mb-1">
                          {info.title}
                        </h4>
                        <p className="text-[#0077B6] font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-[#666666]">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-[#333333] mb-6">
                Follow Us
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
              </div>
              
              <p className="text-sm text-[#666666] mt-4">
                Stay updated with our latest campaigns and success stories.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="h-6 w-6 text-[#0077B6]" />
                <h3 className="text-2xl font-semibold text-[#333333]">
                  Send us a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="How can we help you? Please provide as much detail as possible..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours. 
                    For urgent matters, please call our helpline.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005a8a] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h3 className="text-2xl font-semibold text-[#333333] mb-6">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-[#333333] mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-[#666666]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <p className="text-sm text-teal-800">
                  <strong>Still have questions?</strong> Don't hesitate to reach out to us. 
                  Our support team is here to help you navigate the platform and answer any concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Immediate Help?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For urgent medical fundraising needs or donation issues, 
            our support team is available 24/7 to assist you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911800123456"
              className="px-6 py-3 bg-white text-[#0077B6] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call Support: +91 1800-123-4567
            </a>
            <a
              href="mailto:support@medcare.com"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0077B6] transition-colors duration-200"
            >
              Email: support@medcare.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;