import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Leaf, Calendar, Users, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const reservationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mobileNumber: z.string().min(10, "Valid mobile number is required"),
  guests: z.string().min(1, "Number of guests is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  purpose: z.string().optional(),
  notes: z.string().optional(),
});

type ReservationValues = z.infer<typeof reservationSchema>;

const Reservation = () => {
  const { toast } = useToast();
  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      guests: "",
      date: "",
      time: "",
      purpose: "",
      notes: "",
    },
  });

  const onSubmit = (data: ReservationValues) => {
    console.log("Reservation data:", data);
    toast({
      title: "Reservation Received",
      description: "We've received your request. Our team will contact you shortly to confirm.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Welcome Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Contact Us / Reserve Your Table</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invite you to visit or book a table for a comfortable and authentic Indian pure vegetarian dining experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-primary/10 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">Table Reservation</h2>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} data-testid="input-fullname" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter mobile number" {...field} data-testid="input-mobile" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Guests</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} data-testid="input-guests" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid="input-date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} data-testid="input-time" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Visit</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Birthday, Anniversary, Casual" {...field} data-testid="input-purpose" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special requirements or dietary notes?" 
                            className="resize-none"
                            {...field} 
                            data-testid="textarea-notes"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full text-lg py-6" data-testid="button-reserve">
                    Reserve Table
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-primary">Shree Krishna Restaurant</h2>
                    <p className="text-sm font-medium tracking-widest text-secondary uppercase">Pure Vegetarian Restaurant</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Address</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Shop No. 5, Ground Floor, Parvati Commercial Complex, Station Road, 
                        Opposite Lajja Sarees, Ambernath, Thane, Maharashtra.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Number</h4>
                      <a href="tel:+919876543210" className="text-primary font-bold text-lg hover:underline underline-offset-4">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <p className="text-muted-foreground">Mon - Sun: 7:00 AM - 10:30 PM</p>
                      <p className="text-xs text-primary font-medium mt-1">Open All Days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-elegant border border-border h-80 bg-muted relative">
                <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded shadow-md max-w-[250px] text-sm pointer-events-none border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">Shree Krishna Restaurant</h3>
                  <p className="text-gray-600 leading-tight mb-1 text-xs">
                    Shop No. 5, Parvati Commercial Complex, Station Road, Ambernath, Maharashtra 421501
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                    <span className="font-medium text-orange-600">3.9</span>
                    <div className="flex text-orange-500">★★★★☆</div>
                    <span>(1,276 reviews)</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-xs">View larger map</a>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.80786934444!2d73.1934!3d19.2004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7930863953457%3A0xe724b07c81d86e0c!2sShree%20Krishna%20Restaurant!5e0!3m2!1sen!2sin!4v1704620000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Krishna Restaurant Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservation;