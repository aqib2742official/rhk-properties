'use client';

import { ArrowRight, Award, Building2, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { PropertyCard } from "../components/PropertyCard";
import { PremiumSlider } from "../components/PremiumSlider";
import { properties } from "../data/properties";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredProperties = properties.filter(p => p.status === "Available").slice(0, 4);

  return (
    <div className="w-full">
      {/* Premium Hero Slider */}
      <PremiumSlider />

      {/* Why Choose Us Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Building2 className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Expert Market Knowledge</h3>
              <p className="text-muted-foreground text-md">Deep understanding of Dubai's real estate landscape</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Client-First Approach</h3>
              <p className="text-muted-foreground text-md">Personalized service tailored to your unique needs</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Premium Properties</h3>
              <p className="text-muted-foreground text-md">Curated selection of luxury real estate across UAE</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Seamless Transactions</h3>
              <p className="text-muted-foreground text-md">End-to-end support from viewing to ownership</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties in Dubai's most sought-after locations
            </p>
          </div>
          <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 auto-rows-fr">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
          {/* <div className="text-center">
            <Button 
              variant="outline"
              size="lg"
              className="hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-2xl">Why Choose rhk Properties LLC</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-2xl">Expert Guidance</h3>
                    <p className="text-muted-foreground text-md">
                      Our experienced team provides personalized service and expert advice throughout your property journey.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-2xl">Prime Locations</h3>
                    <p className="text-muted-foreground text-md">
                      Access to exclusive properties in Dubai's most prestigious and desirable neighborhoods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-2xl">Transparent Process</h3>
                    <p className="text-muted-foreground text-md">
                      Clear communication and transparent processes ensure a smooth and stress-free experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-2xl">Investment Expertise</h3>
                    <p className="text-muted-foreground text-md">
                      Strategic insights and market analysis to maximize your real estate investment returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzNDcwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Prime Estates Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Explore Premium Neighborhoods</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover Dubai's most prestigious locations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Downtown Dubai",
                properties: "120+ Properties",
                image: "https://images.unsplash.com/photo-1600665787589-c970451fc6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGRvd250b3duJTIwbmVpZ2hib3Job29kfGVufDF8fHx8MTc2MDQyNzM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Dubai Marina",
                properties: "95+ Properties",
                image: "https://images.unsplash.com/photo-1721448288613-7ae076ab03d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMG1hcmluYSUyMHdhdGVyZnJvbnR8ZW58MXx8fHwxNzYwNDI3Mzg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "Palm Jumeirah",
                properties: "75+ Properties",
                image: "https://images.unsplash.com/photo-1726579197785-d738db22a69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwanVtZWlyYWglMjBkdWJhaXxlbnwxfHx8fDE3NjAzOTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((neighborhood, index) => (
              <div key={index}>
                <motion.div
                  className="relative h-80 rounded-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <ImageWithFallback
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-white mb-2">{neighborhood.name}</h3>
                  <p className="text-white/80 text-sm">{neighborhood.properties}</p>
                </div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your journey to finding the perfect property in 4 simple steps
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Share your requirements and preferences with our expert team"
              },
              {
                step: "02",
                title: "Property Selection",
                description: "We curate a personalized list of properties that match your needs"
              },
              {
                step: "03",
                title: "Site Visits",
                description: "Tour your shortlisted properties with our dedicated agents"
              },
              {
                step: "04",
                title: "Seamless Closing",
                description: "We handle all paperwork and ensure a smooth transaction"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative inline-block mb-6"
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-2xl">{item.step}</span>
                  </div>
                </motion.div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied property owners
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Williams",
                role: "Penthouse Owner",
                image: "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYwMzQ0NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
                text: "rhk Properties LLC made our dream of owning a Dubai property come true. Their professionalism and attention to detail were exceptional."
              },
              {
                name: "Ahmed Al-Rashid",
                role: "Villa Owner",
                image: "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYwMzQ0NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
                text: "The team went above and beyond to find us the perfect family villa. Highly recommend their services!"
              },
              {
                name: "Lisa Chen",
                role: "Investor",
                image: "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYwMzQ0NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
                text: "Best real estate agency in Dubai. Their market knowledge and investment advice are unparalleled."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,102,255,0.1)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-0 truncate">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Ready to Find Your Perfect Property?</h2>
            <p className="text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Let our expert team help you discover the ideal home or investment opportunity in Dubai
            </p>
            <Button 
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
