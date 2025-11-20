import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { emailConfig } from "../utils/environment";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear status when user starts typing
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validate environment variables
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === "your_service_id_here" || 
        templateId === "your_template_id_here" || 
        publicKey === "your_public_key_here") {
      setStatus({
        type: "error",
        message: "Email service not configured. Please contact the site administrator."
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      setForm({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon!"
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Oops! There was an error sending your message. Please try again or contact me directly at subashs2573@gmail.com"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm border-gray-600/20 shadow-2xl">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-lg text-sm ${
                    status.type === "success" 
                      ? "bg-green-500/20 border border-green-500/50 text-green-200" 
                      : "bg-red-500/20 border border-red-500/50 text-red-200"
                  }`}>
                    {status.message}
                  </div>
                )}

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-gradient-to-br from-[#cd7c2e] via-[#e09142] to-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl border border-orange-300/20 relative">
              {/* Add decorative background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-lg" />
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
