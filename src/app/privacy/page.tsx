import { Metadata } from 'next'
import { Shield, Phone, Mail, FileText, Clock, Users, Eye, Lock, Globe, Database, CheckCircle, AlertTriangle, Info, UserCheck, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nassoh Car - Data Protection & Privacy',
  description: 'Read Nassoh Car\'s privacy policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities.',
  keywords: 'privacy policy nassoh car, data protection, personal information, privacy rights, data security, morocco car rental privacy'
}

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8 group">
            <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 p-8 rounded-3xl backdrop-blur-sm border border-blue-400/30 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-105">
              <Shield className="h-20 w-20 text-blue-400 mx-auto group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Privacy 
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Policy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Your privacy is our priority. Learn how we protect and handle your personal information with 
            <span className="text-blue-400 font-semibold">NassohCar</span>
          </p>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4">
              <div className="flex items-center justify-center space-x-3 text-blue-300">
                <Clock className="h-6 w-6" />
                <span className="font-medium text-lg">Last updated: July 26, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Commitment
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200/50">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold text-blue-700">Nassoh Car S.A.R.L</span>, we value your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our website or services.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              1. Information We Collect
            </h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">When you use our services, we may collect the following information:</p>
          
          <div className="space-y-4">
            {[
              {
                title: "Personal information:",
                content: "Name, phone number, email address, date of birth, driver's license, passport or CIN number.",
                color: "emerald"
              },
              {
                title: "Booking details:",
                content: "Rental dates, car type, pickup/drop-off location.",
                color: "blue"
              },
              {
                title: "Payment information:",
                content: "IBAN, credit card (for deposit blocking), or cash transaction records.",
                color: "amber"
              },
              {
                title: "Location data (optional):",
                content: "If GPS tracking is used in the vehicle.",
                color: "purple"
              },
              {
                title: "Device and usage information:",
                content: "IP address, browser type, and pages visited.",
                color: "indigo"
              }
            ].map((item, index) => (
              <div key={index} className={`flex items-start bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-${item.color}-300 transition-all duration-300`}>
                <div className={`bg-${item.color}-100 p-2 rounded-lg mr-4 mt-1`}>
                  <CheckCircle className={`h-5 w-5 text-${item.color}-600`} />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <span className="text-gray-700 ml-1">{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-green-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              2. How We Use Your Information
            </h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">We use your data to:</p>
          
          <div className="space-y-4">
            {[
              "Confirm and manage your car rental reservations.",
              "Provide customer service (e.g., delivery, pickup, deposit returns).",
              "Comply with legal obligations (e.g., identity verification for authorities).",
              "Process payments and manage deposits.",
              "Improve our services and website functionality.",
              "Send you booking confirmations and important updates."
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 hover:border-green-300 transition-all duration-300">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Information Sharing */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-orange-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-orange-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              3. Information Sharing
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200/50 mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              We <span className="font-semibold text-orange-700">do not sell, trade, or rent</span> your personal information to third parties.
            </p>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">We may share your information only in the following cases:</p>
          
          <div className="space-y-4">
            {[
              "With Moroccan authorities if required by law (e.g., traffic violations, legal investigations).",
              "With our trusted service providers who help us operate our business (e.g., payment processors).",
              "In case of a business transfer or merger (with prior notice to you)."
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 hover:border-orange-300 transition-all duration-300">
                <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Storage and Security */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-purple-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              4. Data Storage and Security
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200/50">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Storage Location</h3>
              <p className="text-gray-700 leading-relaxed">
                Your data is stored securely in Morocco and complies with local data protection regulations.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200/50">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Security Measures</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200/50">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Retention Period</h3>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-cyan-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              5. Your Rights
            </h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">You have the right to:</p>
          
          <div className="space-y-4">
            {[
              {
                title: "Access:",
                content: "Request a copy of the personal data we hold about you.",
                icon: Eye
              },
              {
                title: "Correction:",
                content: "Request correction of inaccurate or incomplete data.",
                icon: FileText
              },
              {
                title: "Deletion:",
                content: "Request deletion of your personal data (subject to legal obligations).",
                icon: Trash2
              },
              {
                title: "Portability:",
                content: "Request transfer of your data to another service provider.",
                icon: Globe
              },
              {
                title: "Objection:",
                content: "Object to the processing of your personal data in certain circumstances.",
                icon: Shield
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-cyan-300 transition-all duration-300">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4 mt-1">
                    <IconComponent className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                    <p className="text-gray-700 leading-relaxed mt-1">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cookies and Tracking */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-amber-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-amber-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              6. Cookies and Tracking
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200/50">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our website may use cookies to improve your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </div>
        </div>

        {/* International Data Transfers */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-indigo-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-indigo-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              7. International Data Transfers
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200/50">
            <p className="text-gray-700 text-lg leading-relaxed">
              Your personal data is primarily processed within Morocco. If we need to transfer data internationally, we ensure appropriate safeguards are in place.
            </p>
          </div>
        </div>

        {/* Changes to This Policy */}
        <div className="group bg-gradient-to-br from-white via-gray-50/50 to-rose-50/30 rounded-3xl shadow-2xl p-10 mb-12 border border-gray-200/50 hover:shadow-rose-500/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-2xl mr-6 shadow-lg group-hover:shadow-rose-500/30 transition-all duration-300">
              <Info className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              8. Changes to This Policy
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-200/50">
            <p className="text-gray-700 text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website with an updated effective date.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl p-12 mt-16 shadow-2xl border border-blue-300/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <h3 className="text-4xl font-bold text-white mb-8 text-center">
              Privacy Questions?
            </h3>
            <p className="text-blue-100 text-center mb-8 text-lg max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="group flex items-center bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">+212 631-630013</span>
              </div>
              
              <div className="group flex items-center bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">admin@nassohcar.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;