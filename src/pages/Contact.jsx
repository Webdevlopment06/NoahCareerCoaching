import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // ==========================================================
  // STEP 1: INPUT YOUR EMAILJS INFO HERE
  // ==========================================================
  const SERVICE_ID = "service_fivfonv"; // Found in 'Email Services' tab
  const TEMPLATE_ID = "template_5uqlm4r"; // Found in 'Email Templates' tab
  const PUBLIC_KEY = "fWT1vflfA0awaRRiu"; // Found in 'Account' -> 'API Keys'
  // ==========================================================

  useEffect(() => {
    try {
      const raw = localStorage.getItem("contactDraft");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.name) setName(d.name);
        if (d.email) setEmail(d.email);
        if (d.message) setMessage(d.message);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(
          "contactDraft",
          JSON.stringify({ name, email, message }),
        );
      } catch (e) {}
    }, 400);
    return () => clearTimeout(t);
  }, [name, email, message]);

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email.";
    if (!message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", text: err });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    // This object maps your React state to your EmailJS Template
    const templateParams = {
      from_name: name,   // Check that {{from_name}} is in your EmailJS template
      reply_to: email,    // Check that {{reply_to}} is in your EmailJS template
      message: message,   // Check that {{message}} is in your EmailJS template
    };

    // This triggers the actual email send
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus({
          type: "success",
          text: "Message sent! We'll get back to you within 48 hours.",
        });
        setName("");
        setEmail("");
        setMessage("");
        localStorage.removeItem("contactDraft");
      })
      .catch((error) => {
        setStatus({
          type: "error",
          text: "Failed to send. Please check your credentials or try again later.",
        });
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <main className="container py-5">
      <div className="row align-items-start">
        <div className="col-md-6 mb-4">
          <h1 className="fw-bold">Contact</h1>
          <p className="lead">Reach out for coaching, partnerships, or press.</p>
          <ul className="list-unstyled">
             <li className="mb-2"><i className="bi bi-envelope-fill me-2"></i>client@noahcareercoachingapp.com</li>
             <li className="mb-2"><i className="bi bi-telephone-fill me-2"></i>(216) 302-9179</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2 className="h5 fw-bold">Send a message</h2>
          
          {status && (
            <div className={`alert ${status.type === "error" ? "alert-danger" : "alert-success"} mt-3`}>
              {status.text}
            </div>
          )}

          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" rows={5} required />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={submitting}>
              {submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
