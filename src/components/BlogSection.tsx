import { useState } from "react";
import { Calendar, ArrowRight, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const blogPosts = [
  {
    title: "5 Health Benefits of Pure Vegetarian Diet",
    excerpt: "Discover how a vegetarian lifestyle can improve your health and wellbeing...",
    content: `
      <p>A pure vegetarian diet is more than just a food choice; it's a path to a healthier, more vibrant life. Research has consistently shown that vegetarian diets are associated with a lower risk of chronic diseases and improved longevity.</p>
      <h3>1. Heart Health</h3>
      <p>Vegetarian diets are naturally lower in saturated fats and cholesterol. By focusing on whole grains, legumes, and plenty of vegetables, you can significantly lower your blood pressure and reduce the risk of heart disease.</p>
      <h3>2. Weight Management</h3>
      <p>Plant-based foods are typically higher in fiber and lower in calories than animal products. This makes it easier to maintain a healthy weight without feeling restricted.</p>
      <h3>3. Better Digestion</h3>
      <p>The high fiber content in a vegetarian diet promotes a healthy digestive system, preventing constipation and supporting a diverse gut microbiome.</p>
      <h3>4. Lower Risk of Diabetes</h3>
      <p>Whole plant foods help regulate blood sugar levels and improve insulin sensitivity, making it an excellent choice for preventing and managing Type 2 diabetes.</p>
      <h3>5. Increased Energy</h3>
      <p>Nutrient-dense vegetarian meals provide sustained energy throughout the day, avoiding the 'heavy' feeling often associated with meat-heavy meals.</p>
    `,
    date: "Jan 5, 2026",
    category: "Health",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
  },
  {
    title: "The Art of Making Perfect South Indian Dosa",
    excerpt: "Learn the secrets behind our crispy, golden dosas that customers love...",
    content: `
      <p>The Dosa is a masterpiece of South Indian cuisine. Achieving that perfect balance of a crispy exterior and a slightly tangy, soft interior is truly an art form that we've perfected over a decade.</p>
      <h3>The Secret Fermentation</h3>
      <p>The soul of a great dosa lies in its batter. We use a precise ratio of parboiled rice to urad dal, soaked for hours and then ground to a silky consistency. The real magic happens during the 8-12 hour fermentation period, where natural probiotics develop that unique flavor.</p>
      <h3>Temperature Control</h3>
      <p>A seasoned cast-iron tawa is essential. It must be hot enough to sizzle but consistent enough to cook the dosa evenly. We use a light brush of oil and a splash of water to regulate the surface temperature before spreading each dosa.</p>
      <h3>The Spread</h3>
      <p>Spreading the batter in a thin, even circle requires a steady hand and years of practice. We start from the center and move outwards in a spiral motion to achieve that paper-thin consistency.</p>
      <p>At Shree Krishna, we serve our dosas with fresh coconut chutney and our signature spicy sambar, made fresh every single morning.</p>
    `,
    date: "Dec 28, 2025",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop",
  },
  {
    title: "New Year Special Offers at Shree Krishna",
    excerpt: "Celebrate the new year with exciting discounts on your favorite dishes...",
    content: `
      <p>As we step into 2026, we want to celebrate a decade of serving our wonderful community with authentic vegetarian flavors. This New Year, we have curated something truly special for our patrons.</p>
      <h3>Special Festive Thali</h3>
      <p>Throughout January, we are introducing a "Grand Celebration Thali" featuring rare traditional recipes from across India, including special sweets that are usually only made during major festivals.</p>
      <h3>New Year Discounts</h3>
      <ul>
        <li><strong>Early Bird Breakfast:</strong> 15% off on all breakfast items between 7:00 AM and 9:00 AM.</li>
        <li><strong>Family Weekend:</strong> Groups of 4 or more receive a complimentary round of our signature Masala Chai and desserts.</li>
        <li><strong>Loyalty Bonus:</strong> Double points for all our loyalty program members throughout the month.</li>
      </ul>
      <p>Come join us with your family and friends to start the year on a delicious note. We recommend booking your tables in advance through our website to avoid the holiday rush!</p>
    `,
    date: "Dec 20, 2025",
    category: "Offers",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&h=600&fit=crop",
  },
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

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
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none bg-background">
          {selectedPost && (
            <div className="relative">
              <div className="relative h-[300 md:h-[400px] w-full">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm z-10"
                  onClick={() => setSelectedPost(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="px-6 py-8 md:px-12 md:py-12 -mt-20 relative z-10 bg-background rounded-t-[32px]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
                    <Tag className="w-4 h-4" />
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                </div>

                <DialogTitle className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  {selectedPost.title}
                </DialogTitle>

                <div 
                  className="prose prose-lg max-w-none text-muted-foreground 
                    prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                    prose-p:mb-6 prose-p:leading-relaxed
                    prose-strong:text-foreground prose-strong:font-bold
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                    prose-li:mb-2"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogSection;
