'use client';

import { Award, Target, Users, TrendingUp, Shield, Globe, Heart, Sparkles, Building, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const teamMembers = [
    {
      name: "Mohammed Al Mansouri",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwdGVhbXxlbnwxfHx8fDE3NjA0MjYyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "15+ years of experience in luxury real estate"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwYWdlbnR8ZW58MXx8fHwxNzYwNDI2MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Expert in premium property transactions"
    },
    {
      name: "Ahmed Hassan",
      role: "Senior Property Consultant",
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2MDQwNjYxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Specialized in waterfront properties"
    },
    {
      name: "Fatima Al Zaabi",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwdGVhbXxlbnwxfHx8fDE3NjA0MjYyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Digital marketing and brand strategy expert"
    }
  ];

  const achievements = [
    { icon: Award, title: "Best Real Estate Agency 2024", description: "Dubai Property Awards" },
    { icon: Users, title: "1200+ Happy Clients", description: "Trusted by families across UAE" },
    { icon: TrendingUp, title: "AED 2B+ in Sales", description: "Total property transactions" },
    { icon: Target, title: "100% Success Rate", description: "Client satisfaction guarantee" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings, ensuring trust and confidence."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your needs and dreams are at the heart of everything we do. We're committed to exceeding expectations."
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for perfection in every service we provide, from initial consultation to final handover."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and market insights to deliver superior real estate solutions."
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started with a vision to transform Dubai's luxury real estate market" },
    { year: "2015", title: "Major Expansion", description: "Opened 5 new offices across UAE and expanded our team to 50+ professionals" },
    { year: "2020", title: "Digital Transformation", description: "Launched innovative virtual tour technology and AI-powered property matching" },
    { year: "2024", title: "Industry Leader", description: "Recognized as the #1 luxury real estate agency in Dubai" }
  ];

  const services = [
    {
      icon: Building,
      title: "Property Sales",
      description: "Expert guidance in buying and selling premium properties across Dubai"
    },
    {
      icon: Clock,
      title: "Property Management",
      description: "Comprehensive management services for property owners and investors"
    },
    {
      icon: CheckCircle,
      title: "Investment Consulting",
      description: "Strategic advice on real estate investments and portfolio management"
    },
    {
      icon: Globe,
      title: "International Services",
      description: "Supporting international buyers and investors entering the UAE market"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70 z-10" />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzNDcwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About AHK Solution"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4">About AHK Solution</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner in luxury real estate since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, AHK Solution has grown to become one of Dubai's most trusted and respected real estate agencies. Our journey began with a simple yet powerful vision: to help people find their dream homes in one of the world's most dynamic cities.
                </p>
                <p>
                  Over the years, we have built a reputation for excellence, integrity, and personalized service. Our team of experienced professionals brings together decades of combined expertise in the UAE real estate market, with deep knowledge of every neighborhood, development, and investment opportunity.
                </p>
                <p>
                  Today, we're proud to have helped over 1,200 families and investors find their perfect properties, from luxury waterfront villas to contemporary downtown penthouses. Our success is measured not just in transactions, but in the lasting relationships we've built with our clients.
                </p>
                <p>
                  We believe that finding the perfect property is about more than just square footage and amenities—it's about understanding your lifestyle, your dreams, and your future. That's why we take the time to truly listen and provide personalized guidance every step of the way.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative h-[500px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707917228955-1ea125182d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA0MjQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dubai Skyline"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg p-6"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-6 w-6 text-accent" />
                </motion.div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,102,255,0.1)" }}
            >
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To provide exceptional real estate services that exceed our clients' expectations, helping them make informed decisions and achieve their property goals with confidence and ease.
              </p>
              <p className="text-muted-foreground">
                We are committed to delivering personalized service, expert market knowledge, and innovative solutions that make the property buying, selling, and investing process seamless and rewarding.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,102,255,0.1)" }}
            >
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                To be the most trusted and innovative real estate company in the UAE, recognized for our integrity, expertise, and commitment to delivering outstanding results for our clients.
              </p>
              <p className="text-muted-foreground">
                We envision a future where every client experiences the perfect blend of technology, personal touch, and market expertise in their real estate journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our success story
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      className="bg-background rounded-lg p-6 inline-block"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,102,255,0.15)" }}
                    >
                      <div className="text-accent mb-2">{milestone.year}</div>
                      <h3 className="mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-accent border-4 border-background z-10"
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </motion.div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized for excellence in real estate services across the UAE
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="bg-background rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="h-8 w-8 text-accent" />
                  </motion.div>
                </div>
                <h3 className="mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you find your perfect property
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-secondary rounded-lg overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4">Ready to Work With Us?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let our expert team guide you through your real estate journey with professionalism and care
            </p>
            <Link href="/contact">
              <motion.button
                className="inline-block px-8 py-4 bg-white text-accent rounded-lg hover:bg-white/90 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
