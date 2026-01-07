import { MapPin, Phone, Clock, Mail, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Shop No. 5, Ground Floor,",
      "Parvati Commercial Complex, Station Road,",
      "Opposite Lajja Sarees, Ambernath, Thane, Maharashtra."
    ],
    action: { label: "Get Directions", link: "https://maps.google.com/maps?q=Shree+Krishna+Restaurant+Ambernath" },
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210"],
    action: { label: "Call Now", link: "tel:+919876543210" },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Sun: 7:00 AM - 10:30 PM", "Open All Days"],
    action: null,
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@shreekrishna.com"],
    action: { label: "Send Email", link: "mailto:info@shreekrishna.com" },
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
            Visit Us
          </span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mt-4">
            We would love to hear from you. Visit us or get in touch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h4>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-secondary transition-colors"
                  >
                    {info.action.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-card">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-muted flex items-center justify-center relative">
              <div className="absolute top-6 left-6 z-10 bg-white p-4 rounded shadow-lg max-w-[280px] text-sm pointer-events-none border border-gray-200 hidden sm:block">
                <h3 className="font-bold text-gray-900 mb-1 text-base">Shree Krishna Restaurant</h3>
                <p className="text-gray-600 leading-tight mb-2 text-xs">
                  Shop No. 5, Ground Floor, Parvati Commercial Complex, Station Road, Opposite Lajja Sarees, Ambernath, Thane, Maharashtra 421501
                </p>
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                  <span className="font-medium text-orange-600 text-sm">3.9</span>
                  <div className="flex text-orange-500">★★★★☆</div>
                  <span>(1,276 reviews)</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <a href="#" className="text-blue-600 hover:underline text-xs font-medium">View larger map</a>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-0.5">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8.5v-4c0-.28.22-.5.5-.5h5V8l3.5 3.25-3.5 3.25z"/></svg>
                    </div>
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Directions</span>
                  </div>
                </div>
              </div>
              {/* Stylized Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.80786934444!2d73.1934!3d19.2004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7930863953457%3A0xe724b07c81d86e0c!2sShree%20Krishna%20Restaurant!5e0!3m2!1sen!2sin!4v1704620000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card rounded-2xl p-8 shadow-card">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Ready to taste the best vegetarian food?
              </h3>
              <p className="text-muted-foreground">
                Visit us today or call to reserve your table!
              </p>
            </div>
            <Button
              size="lg"
              className="gradient-button text-primary-foreground px-8 py-6 rounded-full shadow-elevated whitespace-nowrap"
              asChild
            >
              <a href="/reservation">
                <Calendar className="w-5 h-5 mr-2" />
                Reserve Table
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
