'use client';

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/atoms/button/Button";
import InputField from "../components/molecules/form/input/InputField";
import TextArea from "../components/molecules/form/input/TextArea";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you find your perfect property in UAE.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to buy, sell, or invest in Dubai real estate, our expert team is ready to assist you. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Our Office</h3>
                  <p className="text-muted-foreground">
                    Prime Tower, Business Bay<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    +971 4 XXX XXXX<br />
                    +971 50 XXX XXXX (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    info@rhkproperties.ae<br />
                    sales@rhkproperties.ae
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-secondary rounded-xl p-6 shadow-lg">
              <h3 className="mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-xl">
            <h2 className="mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Full Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
                hint={errors.name}
                required
                leftIcon={<span className="text-lg">👤</span>}
              />

              <InputField
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={!!errors.email}
                hint={errors.email}
                required
                leftIcon={<Mail className="h-4 w-4" />}
              />

              <InputField
                label="Phone Number"
                type="tel"
                placeholder="+971 XX XXX XXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                leftIcon={<Phone className="h-4 w-4" />}
              />

              <InputField
                label="Subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                error={!!errors.subject}
                hint={errors.subject}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span className="text-error-500 ml-1">*</span>
                </label>
                <TextArea
                  placeholder="Tell us more about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(value) => setFormData({ ...formData, message: value })}
                  error={!!errors.message}
                  hint={errors.message}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-secondary rounded-xl h-96 flex items-center justify-center shadow-lg">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-accent" />
              <h3 className="mb-2">Office Location Map</h3>
              <p>Prime Tower, Business Bay, Dubai</p>
              <p className="text-sm mt-2">Google Maps integration available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
