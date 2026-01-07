import { Play, Film } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
            Watch & Explore
          </span>
          <h2 className="section-title">Videos</h2>
          <p className="section-subtitle mt-4">
            Coming soon - Watch our chefs in action and explore our kitchen
          </p>
        </div>

        {/* Video Placeholder Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Kitchen Tour", description: "Take a peek inside our hygienic kitchen" },
            { title: "Making of Dosa", description: "Watch the art of crafting perfect dosa" },
            { title: "Customer Stories", description: "Hear what our customers say about us" },
          ].map((video, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Video Thumbnail Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elevated">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
                <div className="absolute top-4 right-4 bg-foreground/70 text-primary-foreground text-xs px-2 py-1 rounded">
                  Coming Soon
                </div>
              </div>
              {/* Video Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-secondary text-sm mb-2">
                  <Film className="w-4 h-4" />
                  <span>Video</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {video.title}
                </h4>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
