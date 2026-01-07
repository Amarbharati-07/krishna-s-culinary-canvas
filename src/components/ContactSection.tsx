import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
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
              {/* Stylized Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.80786934444!2d73.1934!3d19.2004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAxLjQiTiA3M8KwMTEnMzYuMiJF!5e0!3m2!1sen!2sin!4v1704620000000!5m2!1sen!2sin"
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
