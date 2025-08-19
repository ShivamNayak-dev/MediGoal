import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Upload, FileText, CheckCircle } from 'lucide-react';

const StartFundraiser = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    condition: '',
    city: '',
    targetAmount: '',
    story: '',
    documents: [] as File[],
    relationship: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      setFormData(prev => ({ ...prev, documents: Array.from(files) }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate form submission
    alert('Fundraiser created successfully! It will be reviewed and published within 24 hours.');
    navigate('/');
  };

  const steps = [
    { number: 1, title: 'Patient Details', icon: '👤' },
    { number: 2, title: 'Fundraiser Info', icon: '💰' },
    { number: 3, title: 'Documents', icon: '📄' },
    { number: 4, title: 'Review & Submit', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-[#0077B6] hover:text-[#005a8a] mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </button>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
                    currentStep >= step.number 
                      ? 'bg-[#0077B6] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-[#0077B6]' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded ${
                    currentStep > step.number ? 'bg-[#0077B6]' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-[#333333] mb-6">Patient Details</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="Enter patient's full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="Patient's age"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Medical Condition *
                  </label>
                  <input
                    type="text"
                    value={formData.condition}
                    onChange={(e) => handleInputChange('condition', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="e.g., Heart Surgery, Cancer Treatment, etc."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Your Relationship to Patient *
                    </label>
                    <select
                      value={formData.relationship}
                      onChange={(e) => handleInputChange('relationship', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    >
                      <option value="">Select relationship</option>
                      <option value="self">Self</option>
                      <option value="parent">Parent</option>
                      <option value="child">Child</option>
                      <option value="spouse">Spouse</option>
                      <option value="sibling">Sibling</option>
                      <option value="friend">Friend</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-[#333333] mb-6">Fundraiser Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Target Amount (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.targetAmount}
                    onChange={(e) => handleInputChange('targetAmount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="Enter the amount needed for treatment"
                  />
                  <p className="mt-1 text-sm text-[#666666]">
                    Enter the total amount needed for medical treatment
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Patient Story *
                  </label>
                  <textarea
                    rows={6}
                    value={formData.story}
                    onChange={(e) => handleInputChange('story', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="Tell the patient's story. Include details about their condition, treatment needed, and why you're raising funds. Be honest and heartfelt."
                  />
                  <p className="mt-1 text-sm text-[#666666]">
                    A compelling story helps donors understand the need and encourages them to contribute
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-[#333333] mb-6">Medical Documents</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Required Documents</p>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>• Medical reports and diagnosis</li>
                        <li>• Doctor's prescription or treatment plan</li>
                        <li>• Hospital estimates or bills</li>
                        <li>• Identity proof of patient</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Upload Medical Documents *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0077B6] transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-[#333333]">
                        Drop files here or click to browse
                      </p>
                      <p className="text-sm text-[#666666]">
                        Supported formats: PDF, JPG, PNG (Max 10MB each)
                      </p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  
                  {formData.documents.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-[#333333]">Selected files:</p>
                      {formData.documents.map((file, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-[#666666]">
                          <FileText className="h-4 w-4" />
                          <span>{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> All documents will be verified by our medical team. 
                    Please ensure all documents are clear and authentic. This helps build trust with donors.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-[#333333] mb-6">Review & Submit</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#333333]">Patient Information</h3>
                    <div className="space-y-2">
                      <p><strong>Name:</strong> {formData.patientName}</p>
                      <p><strong>Age:</strong> {formData.age}</p>
                      <p><strong>Condition:</strong> {formData.condition}</p>
                      <p><strong>Location:</strong> {formData.city}</p>
                      <p><strong>Relationship:</strong> {formData.relationship}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#333333]">Fundraiser Details</h3>
                    <div className="space-y-2">
                      <p><strong>Target Amount:</strong> ₹{formData.targetAmount ? parseInt(formData.targetAmount).toLocaleString() : '0'}</p>
                      <p><strong>Documents:</strong> {formData.documents.length} files uploaded</p>
                      <p><strong>Contact Email:</strong> {formData.contactEmail}</p>
                      <p><strong>Contact Phone:</strong> {formData.contactPhone}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">Patient Story</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-[#666666]">{formData.story || 'No story provided'}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Your fundraiser will be reviewed by our team within 24 hours</li>
                    <li>• Medical documents will be verified for authenticity</li>
                    <li>• Once approved, your campaign will go live on our platform</li>
                    <li>• You'll receive an email confirmation with your campaign link</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-[#0077B6] border-gray-300 rounded focus:ring-[#0077B6]"
                  />
                  <label htmlFor="terms" className="text-sm text-[#333333]">
                    I agree to the <a href="#" className="text-[#0077B6] hover:underline">Terms of Service</a> and <a href="#" className="text-[#0077B6] hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="flex items-center space-x-2 px-6 py-3 bg-[#0077B6] text-white rounded-lg hover:bg-[#005a8a] transition-colors duration-200"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center space-x-2 px-8 py-3 bg-[#00BFA5] text-white rounded-lg hover:bg-[#00a693] transition-colors duration-200"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Submit Fundraiser</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFundraiser;