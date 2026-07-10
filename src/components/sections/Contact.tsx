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
    label: 'Email Address',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <FaPhoneAlt className="text-xl text-[#00E5FF]" />,
    label: 'Phone Number',
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
      className="w-full relative py-28 md:py-36 lg:py-[160px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Let's Connect"
            subtitle="Start a Conversation"
            align="center"
          />
        </ScrollReveal>

        {/* Desktop 40% / 60% Layout: grid-cols-1 lg:grid-cols-10 gap-8 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-stretch"
        >
          {/* Left Column (40% - lg:col-span-4) - Contact Info Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 h-full">
            {contactItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <a
                  href={item.href}
                  className="block group h-full"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <GlassCard className="p-7 flex items-center gap-5 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[13px] uppercase tracking-widest text-[#94A3B8] font-semibold mb-1">
                        {item.label}
                      </div>
                      <div className="text-white font-bold text-[18px] group-hover:text-[#00E5FF] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column (60% - lg:col-span-6) - Form */}
          <div className="lg:col-span-6 h-full">
            <GlassCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Direct Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 w-full"
                >
                  <div>
                    <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
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
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[#64748B] text-base focus:outline-none focus:border-[#4F46E5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
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
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[#64748B] text-base focus:outline-none focus:border-[#4F46E5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[#64748B] text-base focus:outline-none focus:border-[#4F46E5] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:shadow-[0_0_35px_rgba(79,70,229,0.5)] disabled:opacity-50 border border-white/10"
                      style={{
                        background: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
                      }}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : isSubmitted ? (
                        <>
                          <FaCheckCircle className="text-lg" />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-base" />
                          <span>Send Message</span>
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
