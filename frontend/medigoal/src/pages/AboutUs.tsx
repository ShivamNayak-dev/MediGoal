
import { Link } from 'react-router-dom';
import { Heart, Shield, TrendingUp, Users, Award, Globe } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '12,847', label: 'Fundraisers Created' },
    { number: '8,543', label: 'Lives Saved' },
    { number: '₹45.6M', label: 'Total Raised' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Only 1-2% Fee',
      description: 'We keep our fees minimal so more money goes directly to medical treatment.'
    },
    {
      icon: Heart,
      title: 'Donor Privacy Protection',
      description: 'We protect donor information and never share personal data with third parties.'
    },
    {
      icon: Globe,
      title: 'Blockchain-Ready Transparency',
      description: 'Transparent donation tracking with blockchain technology for complete trust.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg',
      description: 'Leading our medical verification process with 15+ years of healthcare experience.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Passionate about making healthcare accessible to everyone through technology.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      description: 'Ensuring smooth operations and excellent user experience for all our users.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            About <span className="text-[#0077B6]">MedCare</span>
          </h1>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">
            We believe that no one should be denied medical treatment due to lack of funds. 
            Our platform connects patients with generous donors to make healthcare accessible for all.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                <strong className="text-[#333333]">"No one should be denied treatment due to lack of funds."</strong>
              </p>
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                At MedCare, we're building a transparent, secure, and compassionate platform where 
                patients can raise funds for critical medical treatments while donors can contribute 
                with complete confidence that their money is making a real difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-[#00BFA5] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#333333]">Compassionate Care</h4>
                    <p className="text-[#666666]">Every patient deserves access to life-saving medical treatment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-[#00BFA5] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#333333]">Complete Transparency</h4>
                    <p className="text-[#666666]">Full verification process and blockchain-ready transaction tracking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-[#00BFA5] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#333333]">Community Support</h4>
                    <p className="text-[#666666]">Bringing together a community of generous donors and those in need.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4269365/pexels-photo-4269365.jpeg"
                alt="Healthcare professionals helping patients"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0077B6]">8,543</div>
                  <div className="text-sm text-[#666666]">Lives Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Our Vision
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              To create a world where financial barriers never prevent someone from receiving 
              the medical care they need, powered by community support and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4">
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

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-[#666666] mb-12 max-w-2xl mx-auto">
            Together with our community of donors and patients, we've achieved remarkable milestones 
            in making healthcare accessible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8">
                <div className="text-4xl md:text-5xl font-bold text-[#0077B6] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-[#333333]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Our dedicated team works tirelessly to ensure every campaign is verified, 
              secure, and successful in helping patients get the care they need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0077B6] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#666666]">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Award className="h-12 w-12 text-[#0077B6] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Trust & Integrity
              </h3>
              <p className="text-[#666666]">
                Every campaign undergoes rigorous medical verification to ensure authenticity 
                and build donor confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <TrendingUp className="h-12 w-12 text-[#0077B6] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Innovation & Technology
              </h3>
              <p className="text-[#666666]">
                We leverage cutting-edge technology including blockchain for transparent 
                transaction tracking and fraud prevention.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Heart className="h-12 w-12 text-[#0077B6] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Compassion & Empathy
              </h3>
              <p className="text-[#666666]">
                We understand the emotional and financial stress of medical emergencies 
                and provide compassionate support throughout the process.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Users className="h-12 w-12 text-[#0077B6] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Community First
              </h3>
              <p className="text-[#666666]">
                Our platform thrives on the generosity of donors and the courage of 
                patients sharing their stories to inspire support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0077B6] to-[#00BFA5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need help with medical expenses or want to support others in need, 
            you're part of our community dedicated to making healthcare accessible for all.
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
              Support a Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;