import galleryInterior from "@/assets/gallery-interior.jpg";
import gallerySamosa from "@/assets/gallery-samosa.jpg";
import galleryChai from "@/assets/gallery-chai.jpg";
import galleryPaneer from "@/assets/gallery-paneer.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBurger from "@/assets/gallery-burger.jpg";
import heroDosa from "@/assets/hero-dosa.jpg";
import heroThali from "@/assets/hero-thali.jpg";

const galleryImages = [
  { src: galleryInterior, alt: "Restaurant Interior", category: "Ambiance" },
  { src: gallerySamosa, alt: "Crispy Samosas", category: "Snacks" },
  { src: galleryChai, alt: "Masala Chai", category: "Beverages" },
  { src: galleryPaneer, alt: "Paneer Butter Masala", category: "Main Course" },
  { src: galleryKitchen, alt: "Hygienic Kitchen", category: "Kitchen" },
  { src: galleryBurger, alt: "Veg Burger", category: "Fast Food" },
  { src: heroDosa, alt: "Crispy Dosa", category: "South Indian" },
  { src: heroThali, alt: "Vegetarian Thali", category: "Thali" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
            Visual Journey
          </span>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle mt-4">
            A glimpse into our world of delicious food and warm hospitality
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item group relative ${
                index === 0 || index === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs text-secondary font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h4 className="text-primary-foreground font-serif text-lg font-semibold">
                    {image.alt}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
