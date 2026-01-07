import { useState, useEffect } from "react";
import { ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroDosa from "@/assets/hero-dosa.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import heroPavbhaji from "@/assets/hero-pavbhaji.jpg";
import heroIdli from "@/assets/hero-idli.jpg";

const heroImages = [
  { src: heroDosa, alt: "Crispy Dosa with Chutney and Sambar" },
  { src: heroThali, alt: "Traditional Indian Vegetarian Thali" },
  { src: heroPavbhaji, alt: "Spicy Pav Bhaji" },
  { src: heroIdli, alt: "Soft Idli with Varieties of Chutneys" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          } ${isTransitioning && index === currentImageIndex ? "scale-105" : "scale-100"}`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Vegetarian Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide">100% PURE VEGETARIAN</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: "100ms" }}>
            Where Authentic Tradition{" "}
            <span className="block mt-2">Meets Creative Vegetarian Cuisine</span>
          </h1>

          {/* Since Badge */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-serif text-xl md:text-2xl italic">Since 10+ Years</span>
            <div className="h-px w-12 bg-secondary" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button
              size="lg"
              className="gradient-button text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold rounded-full shadow-elevated"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Menu
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Reserve Table
            </Button>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-secondary w-8"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-primary-foreground/70">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-4">Scroll</span>
        <div className="w-px h-12 bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
