import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Flame,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';
import { MagneticButton } from '../components/MagneticButton';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '$15k - $30k/mo',
    selectedServices: [] as string[],
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const availableServices = [
    'Search Engine Optimization',
    'Google & Meta Ads',
    'Custom Web Development',
    'Brand Identity',
    'UI/UX Design',
    'Local SEO',
    'E-Commerce Growth',
  ];

  const budgetOptions = [
    '< $10k/mo',
    '$10k - $25k/mo',
    '$25k - $50k/mo',
    '$50k+/mo',
  ];

  const handleServiceToggle = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceName)
        ? prev.selectedServices.filter((s) => s !== serviceName)
        : [...prev.selectedServices, serviceName],
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid work email is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Please briefly describe your growth goals';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#DE0918', '#FF3B4A', '#690A0F', '#F8F8F8'],
      });
    }, 1500);
  };

  return (
    <div className={`relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-400 ${
      isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'
    }`}>
      {/* Background Red Glows in Dark Mode Only */}
      {isDark && <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />}

      {/* ========================================================================= */}
      {/* 1. CONTACT HERO */}
      {/* ========================================================================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border text-xs font-mono ${
            isDark ? 'border-red-900/40 text-red-400' : 'border-red-200 text-red-600 shadow-xs'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-red-500" />
          <span>Strategic Inquiry</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-tight"
        >
          Let's Engineer Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-800">Growth Strategy</span>
        </motion.h1>

        <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
          Fill out the consultation request below. A senior growth partner will review your current digital footprint and respond within 12 business hours.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 2. FORM & DIRECT DETAILS GRID */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Details & Office Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`glass-card rounded-3xl p-8 border space-y-6 ${
              isDark ? 'border-red-900/30' : 'border-stone-200 shadow-sm'
            }`}>
              <h3 className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                Direct Agency Contact
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-500">Inquiries & Proposals</span>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>growth@nexusagency.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-500">Direct Toll-Free Line</span>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>+1 (800) 459-NEXUS</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-500">Guaranteed Response Time</span>
                    <p className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Under 12 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Office Cards */}
            <div className="space-y-4">
              <h4 className={`text-lg font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                Global Offices
              </h4>

              <div className={`glass-card rounded-2xl p-4 border flex items-center justify-between ${
                isDark ? 'border-neutral-900' : 'border-stone-200'
              }`}>
                <div>
                  <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-neutral-900'}`}>San Francisco (HQ)</h5>
                  <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>500 Howard St, Suite 400, CA 94105</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 bg-red-600/20 text-red-500 border border-red-500/30 rounded-full font-bold">PST</span>
              </div>

              <div className={`glass-card rounded-2xl p-4 border flex items-center justify-between ${
                isDark ? 'border-neutral-900' : 'border-stone-200'
              }`}>
                <div>
                  <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-neutral-900'}`}>London Innovation Hub</h5>
                  <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>100 Bishopsgate, London EC2N 4AG</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 bg-red-600/20 text-red-500 border border-red-500/30 rounded-full font-bold">GMT</span>
              </div>
            </div>

            {/* Embedded Simulated Interactive Map Visual */}
            <div className={`glass-card rounded-3xl p-4 border relative overflow-hidden h-48 flex items-center justify-center ${
              isDark ? 'border-red-900/30' : 'border-stone-200'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Global Map View"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="relative z-10 text-center space-y-1">
                <MapPin className="w-8 h-8 text-red-500 mx-auto animate-bounce" />
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark ? 'bg-black/90 text-white border-red-900/40' : 'bg-white/90 text-neutral-900 border-stone-200 shadow-xs'
                }`}>
                  Global Remote & Physical Hubs
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className={`glass-card rounded-3xl p-8 sm:p-10 border relative overflow-hidden shadow-2xl ${
              isDark ? 'border-red-900/40' : 'border-stone-200 shadow-xl'
            }`}>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className={`text-3xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    Strategy Request Received!
                  </h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
                    Thank you, <strong className={isDark ? 'text-white' : 'text-black'}>{formData.name}</strong>. Our senior growth leads are reviewing <strong className={isDark ? 'text-white' : 'text-black'}>{formData.company}</strong>'s market data and will deliver your custom audit within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        website: '',
                        budget: '$15k - $30k/mo',
                        selectedServices: [],
                        message: '',
                      });
                    }}
                    className={`px-6 py-2.5 rounded-full text-xs font-mono transition-colors ${
                      isDark ? 'bg-neutral-900 text-neutral-300 hover:text-white' : 'bg-stone-100 text-stone-700 hover:text-black'
                    }`}
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className={`border-b pb-4 ${isDark ? 'border-neutral-900' : 'border-stone-200'}`}>
                    <h3 className={`text-2xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      Project Consultation Form
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>
                      Select services and share your quarterly growth targets.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 ${
                          isDark
                            ? 'bg-black border-neutral-900 text-white placeholder-neutral-600'
                            : 'bg-stone-50 border-stone-300 text-neutral-900 placeholder-stone-400'
                        } ${errors.name ? 'border-red-600' : ''}`}
                      />
                      {errors.name && <span className="text-[11px] text-red-500 font-mono">{errors.name}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 ${
                          isDark
                            ? 'bg-black border-neutral-900 text-white placeholder-neutral-600'
                            : 'bg-stone-50 border-stone-300 text-neutral-900 placeholder-stone-400'
                        } ${errors.email ? 'border-red-600' : ''}`}
                      />
                      {errors.email && <span className="text-[11px] text-red-500 font-mono">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Aurora Capital"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 ${
                          isDark
                            ? 'bg-black border-neutral-900 text-white placeholder-neutral-600'
                            : 'bg-stone-50 border-stone-300 text-neutral-900 placeholder-stone-400'
                        } ${errors.company ? 'border-red-600' : ''}`}
                      />
                      {errors.company && <span className="text-[11px] text-red-500 font-mono">{errors.company}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                        Company Website
                      </label>
                      <input
                        type="url"
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 ${
                          isDark
                            ? 'bg-black border-neutral-900 text-white placeholder-neutral-600'
                            : 'bg-stone-50 border-stone-300 text-neutral-900 placeholder-stone-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Service Chips Selection */}
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                      Required Growth Services
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {availableServices.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleServiceToggle(srv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-red-600 text-white border border-red-500'
                                : isDark
                                  ? 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                                  : 'bg-stone-100 border border-stone-200 text-stone-600 hover:text-black'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}{srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selection Pills */}
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                      Estimated Monthly Ad / Growth Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-red-600/20 text-red-500 border border-red-500 font-bold'
                              : isDark
                                ? 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                                : 'bg-stone-100 border border-stone-200 text-stone-600 hover:text-black'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                      Growth Goals & Project Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current CPA, targets, or timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full border rounded-xl p-4 text-sm focus:outline-none focus:border-red-500 ${
                        isDark
                          ? 'bg-black border-neutral-900 text-white placeholder-neutral-600'
                          : 'bg-stone-50 border-stone-300 text-neutral-900 placeholder-stone-400'
                      } ${errors.message ? 'border-red-600' : ''}`}
                    />
                    {errors.message && <span className="text-[11px] text-red-500 font-mono">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        Transmitting Audit Request...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit Audit Request <Send className="w-4 h-4" />
                      </span>
                    )}
                  </MagneticButton>

                  <div className={`flex items-center justify-center gap-2 text-[11px] font-mono text-center ${
                    isDark ? 'text-neutral-500' : 'text-stone-500'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                    <span>100% NDA Protection & Zero Spam Guarantee</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
            // Frequently Asked Questions
          </span>
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isDark ? 'border-red-900/30' : 'border-stone-200'
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className={`w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base hover:text-red-500 transition-colors cursor-pointer ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-red-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${
                        isDark ? 'text-neutral-400 border-neutral-900' : 'text-stone-600 border-stone-200'
                      }`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
