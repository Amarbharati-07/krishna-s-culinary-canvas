import { Award, Heart, Clock, Users, Leaf, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Pure Veg",
    description: "Every dish is crafted with pure vegetarian ingredients",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Traditional recipes passed down through generations",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Highest standards of cleanliness and food safety",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Ingredients sourced fresh every morning",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "A warm space for families to dine together",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for taste and quality service",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
            Our Story
          </span>
          <h2 className="section-title">About Shree Krishna Restaurant</h2>
          <p className="section-subtitle mt-4">
            A legacy of authentic Indian vegetarian cuisine, served with love and tradition
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card aspect-square bg-primary flex items-center justify-center p-6">
                <div className="text-center text-primary-foreground">
                  <span className="font-serif text-5xl font-bold">10+</span>
                  <p className="text-sm mt-2 opacity-90">Years of Service</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-card aspect-square bg-secondary flex items-center justify-center p-6">
                <div className="text-center text-secondary-foreground">
                  <span className="font-serif text-5xl font-bold">50k+</span>
                  <p className="text-sm mt-2 opacity-90">Happy Customers</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=500&fit=crop"
                  alt="Indian Food Preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              A Heritage of Taste, Tradition & Trust
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to <strong className="text-primary">Shree Krishna Restaurant</strong>, your trusted destination for authentic Indian vegetarian cuisine. For over a decade, we have been serving delicious, home-style vegetarian food to families, office-goers, and travelers near the railway station.
              </p>
              <p>
                Our commitment to <strong className="text-primary">purity, hygiene, and taste</strong> has made us a beloved choice for daily customers seeking affordable yet flavorful meals. Every dish we serve is prepared with fresh ingredients, traditional recipes, and a generous helping of love.
              </p>
              <p>
                From crispy dosas and fluffy idlis to spicy pav bhaji and comforting thalis, our menu celebrates the rich diversity of Indian vegetarian cuisine. We believe that vegetarian food can be as satisfying and delicious as any meal, and we prove it with every plate we serve.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-primary">100+</span>
                <p className="text-sm text-muted-foreground mt-1">Menu Items</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-primary">4.8</span>
                <p className="text-sm text-muted-foreground mt-1">Star Rating</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-primary">7</span>
                <p className="text-sm text-muted-foreground mt-1">Days Open</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
