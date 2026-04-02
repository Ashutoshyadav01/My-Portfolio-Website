import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../Section";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // 'success' | 'error' | null

  // =========================================================================
  // 📧 HOW TO GET YOUR EMAIL TO WORK:
  // 1. Create a free account at https://www.emailjs.com/
  // 2. Add your Email Service (e.g., Gmail) to get your SERVICE_ID.
  // 3. Create an Email Template to get your TEMPLATE_ID.
  // 4. Find your Public Key in the Account section to get your PUBLIC_KEY.
  // =========================================================================
  const SERVICE_ID = "service_40q23q9"; 
  const TEMPLATE_ID = "template_sw8pn0g";
  const PUBLIC_KEY = "ARS9qqEi4dFK5TQND";
  // =========================================================================

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setMessageStatus('success');
          setIsSending(false);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setMessageStatus('error');
          setIsSending(false);
      });
  };

  const socials = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Ashutoshyadav01" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ashutosh-yadav25/" },
    { name: "Twitter", icon: <FaXTwitter />, link: "https://x.com/AshuYad51727489" }
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side: Text and Socials */}
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tighter leading-tight">
            Let's <span className="text-purple-500">Connect.</span>
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed">
            I'm currently looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to discuss a potential collaboration, 
            feel free to reach out!
          </p>
          
          <div className="flex gap-4 mt-8">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-1 group"
                title={social.name}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform block">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: EmailJS Form */}
        <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Name</label>
              <input 
                type="text" 
                name="from_name" 
                required 
                placeholder="John Doe"
                className="bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Email</label>
              <input 
                type="email" 
                name="from_email" 
                required 
                placeholder="john@example.com"
                className="bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-2">Message</label>
              <textarea 
                name="message" 
                required 
                placeholder="Tell me about your project..."
                rows="4"
                className="bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className="mt-4 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_5px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)]"
            >
              {isSending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </button>

            {messageStatus === 'success' && (
              <p className="text-emerald-400 text-sm text-center font-medium bg-emerald-400/10 py-2 rounded-lg animate-pulse">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            
            {messageStatus === 'error' && (
              <p className="text-red-400 text-sm text-center font-medium bg-red-400/10 py-2 rounded-lg">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
