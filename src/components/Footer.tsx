import { Leaf, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-secondary" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-primary-foreground">
                  Shree Krishna
                </span>
                <span className="text-xs text-primary-foreground/70 tracking-wider">
                  PURE VEG RESTAURANT
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Serving authentic Indian vegetarian cuisine with love and tradition for over a decade. Experience the taste of pure vegetarian food that brings families together.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Menu", "Gallery", "Videos", "Blog", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Shop No. 5, Ground Floor, Parvati Commercial Complex, Station Road, 
                  Opposite Lajja Sarees, Ambernath, Thane, Maharashtra.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/70">7:00 AM - 10:30 PM (All Days)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Shree Krishna Restaurant. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-leaf" />
              <span>100% Pure Vegetarian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
