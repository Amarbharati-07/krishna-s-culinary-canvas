import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "Absolutely incredible! The flavors are authentic and the service is outstanding. This has become my go-to place for special occasions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Arjun Patel",
    rating: 5,
    comment: "The Dosa here is exceptional! Reminds me of the authentic flavors from my childhood. Highly recommend the masala dosa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Kavya Reddy",
    rating: 5,
    comment: "Amazing atmosphere and even better food! The paneer tikka was cooked to perfection. Will definitely be coming back soon.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "Rohan Gupta",
    rating: 5,
    comment: "Best vegetarian restaurant in the area! The staff is friendly and knowledgeable. Every dish we tried was bursting with flavor.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Anjali Deshmukh",
    rating: 5,
    comment: "The Pav Bhaji is simply legendary! Perfect balance of spices and the buttered pav is so soft. A must-visit place in Ambernath.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Auto-refresh every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Customer Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued customers have to say about their dining experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <div 
              key={currentIndex}
              className="bg-card p-10 md:p-16 rounded-3xl shadow-elegant border border-primary/10 flex flex-col items-center text-center animate-fade-in w-full"
            >
              <Avatar className="h-20 w-20 border-4 border-primary/10 mb-6">
                <AvatarImage src={currentReview.image} alt={currentReview.name} />
                <AvatarFallback>{currentReview.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < currentReview.rating ? "fill-secondary text-secondary" : "text-muted"}`} />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-6 -left-8 w-12 h-12 text-primary/10" />
                <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed">
                  "{currentReview.comment}"
                </p>
                <Quote className="absolute -bottom-6 -right-8 w-12 h-12 text-primary/10 rotate-180" />
              </div>

              <h4 className="font-bold text-lg text-primary">{currentReview.name}</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Valued Customer</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevReview}
              className="rounded-full hover-elevate"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextReview}
              className="rounded-full hover-elevate"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;