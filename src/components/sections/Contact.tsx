'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  GlassCard,
  SectionHeading,
  MagneticButton,
  ScrollReveal,
} from '@/components/ui';
import { personal } from '@/data';

const contactItems = [
  {
    icon: <FaEnvelope className="text-xl text-[#4F46E5]" />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <FaPhoneAlt className="text-xl text-[#00E5FF]" />,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-[#8B5CF6]" />,
    label: 'Location',
    value: personal.location,
    href: '#contact',
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-[0.05]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5CF6] rounded-full blur-3xl opacity-[0.05]" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Get in Touch" subtitle="Let's work together" />
        </ScrollReveal>

        {/* Desktop 50/50: Left Column Contact Information | Right Column Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-6 flex flex-col justify-between">
            {contactItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1} className="w-full">
                <a
                  href={item.href}
                  className="block group w-full"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <GlassCard className="p-6 flex items-center gap-5 border border-white/[0.06] group-hover:border-[#4F46E5]/40 transition-all duration-300 w-full">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-1">
                        {item.label}
                      </div>
                      <div className="text-white font-medium text-base group-hover:text-[#00E5FF] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column - Interactive Form */}
          <ScrollReveal delay={0.25} className="h-full">
            <GlassCard className="p-8 border border-white/[0.08] h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#4F46E5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#4F46E5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#4F46E5] transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                      }}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : isSubmitted ? (
                        <>
                          <FaCheckCircle className="text-base" />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-sm" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </GlassCard>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
