import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "5 Health Benefits of Pure Vegetarian Diet",
    excerpt: "Discover how a vegetarian lifestyle can improve your health and wellbeing...",
    date: "Jan 5, 2026",
    category: "Health",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  },
  {
    title: "The Art of Making Perfect South Indian Dosa",
    excerpt: "Learn the secrets behind our crispy, golden dosas that customers love...",
    date: "Dec 28, 2025",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
  },
  {
    title: "New Year Special Offers at Shree Krishna",
    excerpt: "Celebrate the new year with exciting discounts on your favorite dishes...",
    date: "Dec 20, 2025",
    category: "Offers",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
            Latest News
          </span>
          <h2 className="section-title">Our Blog</h2>
          <p className="section-subtitle mt-4">
            Updates, offers, recipes, and stories from our kitchen
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary font-medium hover:bg-transparent hover:text-secondary group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
