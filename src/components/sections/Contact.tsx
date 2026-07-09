'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaCheck,
} from 'react-icons/fa';
import {
  GlassCard,
  MagneticButton,
  SectionHeading,
  ScrollReveal,
} from '@/components/ui';
import { personal } from '@/data';
import type { ContactFormData } from '@/types';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: personal.location,
    href: '#',
  },
];

const socialLinks = [
  { icon: FaGithub, href: personal.social?.github ?? 'https://github.com/myworkside', label: 'GitHub' },
  { icon: FaLinkedin, href: personal.social?.linkedin ?? 'https://linkedin.com/in/sumitwork', label: 'LinkedIn' },
  { icon: FaInstagram, href: personal.social?.instagram ?? 'https://instagram.com/sumitupdat', label: 'Instagram' },
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = useCallback((): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormState);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Bg accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-[0.05]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5CF6] rounded-full blur-3xl opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionHeading title="Get in Touch" subtitle="Let's work together" />
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <a
                  href={item.href}
                  className="block group"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <GlassCard className="p-5 flex items-center gap-4 hover:border-[#4F46E5]/30 hover:shadow-[0_0_25px_rgba(79,70,229,0.08)] transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                      style={{
                        background:
                          'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                      }}
                    >
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#E2E8F0] font-medium text-sm group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}

            {/* Social Links */}
            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <MagneticButton key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/[0.08] text-[#94A3B8] backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-[#4F46E5]/40 hover:bg-[#4F46E5]/10 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]"
                      style={{ background: 'rgba(15, 23, 42, 0.6)' }}
                    >
                      <Icon className="text-lg" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal delay={0.4}>
              <GlassCard className="p-8 flex items-center justify-center min-h-[180px]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#4F46E5]/20 to-[#8B5CF6]/20 border border-white/[0.06]">
                    <FaMapMarkerAlt className="text-2xl text-[#4F46E5]" />
                  </div>
                  <p
                    className="text-lg font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #4F46E5, #00E5FF, #8B5CF6)',
                    }}
                  >
                    Map Coming Soon
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    {personal.location}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right Column - Contact Form */}
          <ScrollReveal delay={0.15}>
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-[#E2E8F0] mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[#94A3B8] uppercase tracking-widest mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#E2E8F0] placeholder:text-[#94A3B8]/40 border border-white/[0.06] backdrop-blur-md outline-none transition-all duration-300 focus:border-[#4F46E5]/50 focus:shadow-[0_0_20px_rgba(79,70,229,0.12)]"
                    style={{ background: 'rgba(15, 23, 42, 0.8)' }}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="text-red-400 text-xs mt-1.5 pl-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#94A3B8] uppercase tracking-widest mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#E2E8F0] placeholder:text-[#94A3B8]/40 border border-white/[0.06] backdrop-blur-md outline-none transition-all duration-300 focus:border-[#4F46E5]/50 focus:shadow-[0_0_20px_rgba(79,70,229,0.12)]"
                    style={{ background: 'rgba(15, 23, 42, 0.8)' }}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="text-red-400 text-xs mt-1.5 pl-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs text-[#94A3B8] uppercase tracking-widest mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#E2E8F0] placeholder:text-[#94A3B8]/40 border border-white/[0.06] backdrop-blur-md outline-none transition-all duration-300 focus:border-[#4F46E5]/50 focus:shadow-[0_0_20px_rgba(79,70,229,0.12)]"
                    style={{ background: 'rgba(15, 23, 42, 0.8)' }}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="text-red-400 text-xs mt-1.5 pl-1"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-[#94A3B8] uppercase tracking-widest mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#E2E8F0] placeholder:text-[#94A3B8]/40 border border-white/[0.06] backdrop-blur-md outline-none transition-all duration-300 focus:border-[#4F46E5]/50 focus:shadow-[0_0_20px_rgba(79,70,229,0.12)] resize-none"
                    style={{ background: 'rgba(15, 23, 42, 0.8)' }}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="text-red-400 text-xs mt-1.5 pl-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit */}
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background:
                        'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="inline-flex items-center gap-2"
                        >
                          <FaCheck />
                          Message Sent!
                        </motion.span>
                      ) : isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="inline-flex items-center gap-2"
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: 'linear',
                            }}
                          />
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="inline-flex items-center gap-2"
                        >
                          <FaPaperPlane />
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </MagneticButton>
              </form>
            </GlassCard>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
