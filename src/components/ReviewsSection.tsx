import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Customer Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued customers have to say about their dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 flex flex-col h-full animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 border-2 border-primary/10">
                  <AvatarImage src={review.image} alt={review.name} />
                  <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-secondary text-secondary" : "text-muted"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative flex-1">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 -z-10" />
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;