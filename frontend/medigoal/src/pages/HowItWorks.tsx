
import { Link } from 'react-router-dom';
import { UserPlus, FileCheck, Share, DollarSign, Shield, Clock, Users, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Create',
      icon: UserPlus,
      description: 'Create your fundraiser with patient details, medical documents, and your story.',
      details: [
        'Fill in patient information',
        'Upload medical documents',
        'Write your compelling story',
        'Set your fundraising goal'
      ]
    },
    {
      number: 2,
      title: 'Verify',
      icon: FileCheck,
      description: 'Our medical team verifies all documents and approves your campaign within 24 hours.',
      details: [
        'Medical document verification',
        'Identity confirmation',
        'Story authenticity check',
        'Platform compliance review'
      ]
    },
    {
      number: 3,
      title: 'Share',
      icon: Share,
      description: 'Share your campaign with family, friends, and social networks to reach potential donors.',
      details: [
        'Social media sharing',
        'Email campaigns',
        'WhatsApp distribution',
        'Community outreach'
      ]
    },
    {
      number: 4,
      title: 'Receive Funds',
      icon: DollarSign,
      description: 'Receive donations directly and withdraw funds for medical treatment.',
      details: [
        'Instant donation notifications',
        'Secure payment processing',
        'Easy fund withdrawal',
        'Real-time progress tracking'
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Bank-level security with document verification and fraud prevention.'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Create your fundraiser in minutes with our simple step-by-step process.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join thousands of people helping patients get the care they need.'
    },
    {
      icon: Heart,
      title: 'Low Fees',
      description: 'Only 1-2% platform fee, so more money goes directly to medical treatment.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            How <span className="text-[#0077B6]">MedCare</span> Works
          </h1>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">
            Our simple 4-step process helps you raise funds for medical treatment 
            with transparency and trust at every step.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#0077B6] to-[#00BFA5] transform translate-x-4 z-0" />
                  )}
                  
                  <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-[#0077B6] mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#666666] mb-4">
                        {step.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-[#666666]">
                          <div className="w-2 h-2 bg-[#00BFA5] rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Why Choose MedCare?
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              We're committed to making medical fundraising transparent, secure, 
              and accessible to everyone who needs help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                How long does it take to get my campaign approved?
              </h3>
              <p className="text-[#666666]">
                Our medical verification team typically reviews and approves campaigns within 24 hours. 
                This ensures all medical documents are authentic and helps build trust with donors.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                What are the fees for using MedCare?
              </h3>
              <p className="text-[#666666]">
                We charge only 1-2% platform fee on successful donations. This covers payment processing, 
                platform maintenance, and medical verification services. No hidden charges.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                How do I withdraw the funds raised?
              </h3>
              <p className="text-[#666666]">
                Funds can be withdrawn directly to your bank account after campaign approval. 
                Withdrawals are processed within 2-3 business days with proper documentation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                Can I update my campaign after it goes live?
              </h3>
              <p className="text-[#666666]">
                Yes, you can post updates about the patient's progress, share medical reports, 
                and communicate with donors throughout the campaign period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Fundraiser?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have successfully raised funds for medical treatment. 
            Start your campaign today and get the support you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start-fundraiser"
              className="px-8 py-4 bg-white text-[#0077B6] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Fundraiser
            </Link>
            <Link
              to="/browse"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0077B6] transition-colors duration-200"
            >
              Support Others
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;