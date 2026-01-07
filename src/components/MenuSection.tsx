import { useState } from "react";
import { Clock, Flame, Star, UtensilsCrossed, Coffee, Leaf, Sandwich, CircleDot, Soup, Cookie } from "lucide-react";

// Import category images
import menuSnacks from "@/assets/menu-snacks.jpg";
import menuBreakfast from "@/assets/menu-breakfast.jpg";
import menuFasting from "@/assets/menu-fasting.jpg";
import menuSandwich from "@/assets/menu-sandwich.jpg";
import menuBurger from "@/assets/menu-burger.jpg";
import menuPavbhaji from "@/assets/menu-pavbhaji.jpg";
import menuSoup from "@/assets/menu-soup.jpg";

// Import dish images
import sabudanaKhichdiImg from "@assets/stock_images/sabudana_khichdi_ind_171b2ed2.jpg";
import sabudanaVadaImg from "@assets/stock_images/sabudana_vada_indian_6311216a.jpg";
import kuttuPuriImg from "@assets/stock_images/indian_fasting_food__23b2df75.jpg";

// New dish images for other categories
import samosaImg from "@assets/stock_images/indian_street_food_s_758a93ef.jpg";
import kachoriImg from "@assets/stock_images/indian_street_food_s_83cbce29.jpg";
import paniPuriImg from "@assets/stock_images/indian_street_food_s_1d817b90.jpg";
import bhelPuriImg from "@assets/stock_images/indian_street_food_s_94a03055.jpg";
import sevPuriImg from "@assets/stock_images/indian_street_food_s_59abd492.jpg";
import dahiPuriImg from "@assets/stock_images/indian_street_food_s_7695aab6.jpg";
import pavSandwichImg from "@assets/stock_images/indian_street_food_s_1da04cdf.jpg";
import dabeliImg from "@assets/stock_images/indian_street_food_s_6bfb31bb.jpg";
import vadaPavImg from "@assets/stock_images/indian_street_food_s_977ff4f0.jpg";
import springRollImg from "@assets/stock_images/indian_street_food_s_d871d608.jpg";

import plainDosaImg from "@assets/stock_images/south_indian_breakfa_3c258037.jpg";
import masalaDosaImg from "@assets/stock_images/south_indian_breakfa_ac848312.jpg";
import idliImg from "@assets/stock_images/south_indian_breakfa_88201950.jpg";
import meduVadaImg from "@assets/stock_images/south_indian_breakfa_988216a1.jpg";
import uttapamImg from "@assets/stock_images/south_indian_breakfa_41199087.jpg";
import upmaImg from "@assets/stock_images/south_indian_breakfa_ca7e9259.jpg";
import pohaImg from "@assets/stock_images/south_indian_breakfa_ae7e60cb.jpg";
import alooParathaImg from "@assets/stock_images/south_indian_breakfa_8db427a2.jpg";

import vegSandwichImg from "@assets/stock_images/vegetable_sandwiches_1910e62e.jpg";
import cheeseSandwichImg from "@assets/stock_images/vegetable_sandwiches_b794e3a2.jpg";
import grilledSandwichImg from "@assets/stock_images/vegetable_sandwiches_88066e3e.jpg";
import clubSandwichImg from "@assets/stock_images/vegetable_sandwiches_18bb14e1.jpg";
import paneerSandwichImg from "@assets/stock_images/vegetable_sandwiches_ce79e6ac.jpg";

import alooTikkiBurgerImg from "@assets/stock_images/vegetable_burgers_al_eaebd95a.jpg";
import vegCheeseBurgerImg from "@assets/stock_images/vegetable_burgers_al_812a50dd.jpg";
import paneerBurgerImg from "@assets/stock_images/vegetable_burgers_al_cc6d8e06.jpg";
import cornBurgerImg from "@assets/stock_images/vegetable_burgers_al_d833ad7c.jpg";

import pavBhajiImg from "@assets/stock_images/vegetarian_pav_bhaji_c7db98fa.jpg";
import soupImg from "@assets/stock_images/indian_vegetable_sou_609e496a.jpg";
import placeholderImg from "@assets/stock_images/high_quality_vegetar_48e33079.jpg";

const menuCategories = [
  { id: "snacks", name: "Snacks", icon: UtensilsCrossed, image: menuSnacks },
  { id: "breakfast", name: "Breakfast", icon: Coffee, image: menuBreakfast },
  { id: "fasting", name: "Fasting Menu", icon: Leaf, image: menuFasting },
  { id: "sandwiches", name: "Sandwiches", icon: Sandwich, image: menuSandwich },
  { id: "burgers", name: "Burgers", icon: CircleDot, image: menuBurger },
  { id: "pavbhaji", name: "Pav Bhaji", icon: Cookie, image: menuPavbhaji },
  { id: "soups", name: "Soups", icon: Soup, image: menuSoup },
];

const menuItems: Record<string, Array<{ name: string; price: number; description?: string; isPopular?: boolean; isSpicy?: boolean; image?: string }>> = {
  snacks: [
    { name: "Samosa (2 pcs)", price: 30, description: "Crispy pastry with spiced potato filling", isPopular: true, image: samosaImg },
    { name: "Kachori (2 pcs)", price: 40, description: "Flaky pastry with dal filling", image: kachoriImg },
    { name: "Pani Puri (6 pcs)", price: 40, description: "Crispy puris with spiced water", isPopular: true, image: paniPuriImg },
    { name: "Bhel Puri", price: 50, description: "Tangy puffed rice mixture", isSpicy: true, image: bhelPuriImg },
    { name: "Sev Puri (6 pcs)", price: 50, description: "Crispy puris with chutneys and sev", image: sevPuriImg },
    { name: "Dahi Puri (6 pcs)", price: 60, description: "Sweet and tangy yogurt puris", image: dahiPuriImg },
    { name: "Pav Sandwich", price: 35, description: "Mumbai style bread sandwich", image: pavSandwichImg },
    { name: "Dabeli", price: 40, description: "Sweet and spicy potato in pav", isPopular: true, image: dabeliImg },
    { name: "Vada Pav", price: 35, description: "Spicy potato fritter in bun", isSpicy: true, image: vadaPavImg },
    { name: "Spring Roll (4 pcs)", price: 60, description: "Crispy vegetable rolls", image: springRollImg },
  ],
  breakfast: [
    { name: "Plain Dosa", price: 60, description: "Crispy rice crepe", image: plainDosaImg },
    { name: "Masala Dosa", price: 80, description: "Dosa with spiced potato filling", isPopular: true, image: masalaDosaImg },
    { name: "Butter Masala Dosa", price: 100, description: "Buttery dosa with potato", image: masalaDosaImg },
    { name: "Cheese Dosa", price: 110, description: "Dosa with melted cheese", image: plainDosaImg },
    { name: "Mysore Masala Dosa", price: 100, description: "Spicy red chutney dosa", isSpicy: true, image: masalaDosaImg },
    { name: "Idli (2 pcs)", price: 40, description: "Steamed rice cakes", image: idliImg },
    { name: "Idli Sambhar (3 pcs)", price: 60, description: "Idli with lentil soup", isPopular: true, image: idliImg },
    { name: "Medu Vada (2 pcs)", price: 50, description: "Crispy lentil donuts", image: meduVadaImg },
    { name: "Uttapam", price: 70, description: "Thick rice pancake with toppings", image: uttapamImg },
    { name: "Upma", price: 50, description: "Savory semolina dish", image: upmaImg },
    { name: "Poha", price: 45, description: "Flattened rice with spices", image: pohaImg },
    { name: "Aloo Paratha", price: 70, description: "Potato stuffed flatbread", image: alooParathaImg },
  ],
  fasting: [
    { name: "Sabudana Khichdi", price: 70, description: "Tapioca pearls with peanuts", isPopular: true, image: sabudanaKhichdiImg },
    { name: "Sabudana Vada (2 pcs)", price: 60, description: "Crispy tapioca fritters", image: sabudanaVadaImg },
    { name: "Kuttu Puri (4 pcs)", price: 80, description: "Buckwheat flour puris", image: kuttuPuriImg },
    { name: "Rajgira Paratha", price: 80, description: "Amaranth flour flatbread", image: alooParathaImg },
    { name: "Fruit Salad", price: 60, description: "Fresh seasonal fruits", image: placeholderImg },
    { name: "Singhara Atta Halwa", price: 50, description: "Sweet water chestnut flour halwa", image: placeholderImg },
    { name: "Aloo Jeera (Fasting)", price: 70, description: "Cumin tempered potatoes", image: placeholderImg },
    { name: "Makhana", price: 80, description: "Roasted fox nuts with ghee", image: placeholderImg },
  ],
  sandwiches: [
    { name: "Veg Sandwich", price: 50, description: "Fresh vegetables in bread", image: vegSandwichImg },
    { name: "Cheese Sandwich", price: 70, description: "Melted cheese sandwich", image: cheeseSandwichImg },
    { name: "Grilled Sandwich", price: 80, description: "Toasted vegetable sandwich", isPopular: true, image: grilledSandwichImg },
    { name: "Cheese Grilled Sandwich", price: 100, description: "Grilled with extra cheese", image: grilledSandwichImg },
    { name: "Club Sandwich", price: 120, description: "Triple decker delight", image: clubSandwichImg },
    { name: "Paneer Sandwich", price: 100, description: "Cottage cheese filling", image: paneerSandwichImg },
    { name: "Corn Cheese Sandwich", price: 110, description: "Sweet corn with cheese", image: cheeseSandwichImg },
    { name: "Jain Sandwich", price: 70, description: "No onion, no garlic", image: vegSandwichImg },
  ],
  burgers: [
    { name: "Aloo Tikki Burger", price: 60, description: "Classic potato patty burger", isPopular: true, image: alooTikkiBurgerImg },
    { name: "Veg Cheese Burger", price: 80, description: "Vegetable patty with cheese", image: vegCheeseBurgerImg },
    { name: "Paneer Burger", price: 100, description: "Spiced paneer patty", isPopular: true, image: paneerBurgerImg },
    { name: "Corn Burger", price: 90, description: "Sweet corn patty burger", image: cornBurgerImg },
    { name: "Jumbo Burger", price: 120, description: "Extra large veg burger", image: alooTikkiBurgerImg },
    { name: "Mexican Burger", price: 110, description: "Spicy Mexican style", isSpicy: true, image: alooTikkiBurgerImg },
  ],
  pavbhaji: [
    { name: "Pav Bhaji (Regular)", price: 80, description: "Classic Mumbai pav bhaji", isPopular: true, image: pavBhajiImg },
    { name: "Pav Bhaji (Special)", price: 100, description: "Extra butter and cheese", image: pavBhajiImg },
    { name: "Cheese Pav Bhaji", price: 120, description: "Topped with grated cheese", image: pavBhajiImg },
    { name: "Paneer Pav Bhaji", price: 130, description: "With cottage cheese cubes", image: pavBhajiImg },
    { name: "Jain Pav Bhaji", price: 90, description: "No onion, no garlic", image: pavBhajiImg },
    { name: "Dry Bhaji (No Pav)", price: 60, description: "Just the bhaji", image: pavBhajiImg },
  ],
  soups: [
    { name: "Tomato Soup", price: 60, description: "Classic tangy tomato", isPopular: true, image: soupImg },
    { name: "Sweet Corn Soup", price: 70, description: "Creamy corn soup", image: soupImg },
    { name: "Hot & Sour Soup", price: 70, description: "Spicy and tangy", isSpicy: true, image: soupImg },
    { name: "Manchow Soup", price: 80, description: "Indo-Chinese style", image: soupImg },
    { name: "Cream of Mushroom", price: 90, description: "Rich mushroom cream soup", image: soupImg },
    { name: "Mixed Veg Soup", price: 70, description: "Healthy vegetable broth", image: soupImg },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("snacks");
  
  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4">
            Delicious Offerings
          </span>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle mt-4">
            Explore our wide range of pure vegetarian dishes, crafted with love and tradition
          </p>
        </div>

        {/* Category Tabs with Icons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {menuCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-medium text-sm transition-all duration-300 border-2 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                    : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Category Image */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-muted">
            <img 
              src={currentCategory?.image} 
              alt={currentCategory?.name}
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = placeholderImg;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3">
                {currentCategory && <currentCategory.icon className="w-8 h-8 text-secondary" />}
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold">{currentCategory?.name}</h3>
                  <p className="text-white/80 text-sm">
                    {menuItems[activeCategory]?.length} delicious items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pav Bhaji Timing Notice */}
        {activeCategory === "pavbhaji" && (
          <div className="flex items-center justify-center gap-2 mb-8 bg-secondary/10 py-3 px-6 rounded-full w-fit mx-auto">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="font-medium text-secondary">Available: 5:00 PM - 10:30 PM</span>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group border border-border/50 hover:border-primary/30"
            >
              {item.image && (
                <div className="h-48 overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = placeholderImg;
                    }}
                  />
                </div>
              )}
              {!item.image && (
                <div className="h-48 overflow-hidden bg-muted">
                  <img 
                    src={placeholderImg} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.isPopular && (
                        <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3 fill-secondary" />
                          Popular
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="inline-flex items-center gap-1 bg-destructive/10 text-destructive text-xs px-2 py-0.5 rounded-full">
                          <Flame className="w-3 h-3" />
                          Spicy
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                  <span className="font-serif text-xl font-bold text-primary whitespace-nowrap bg-primary/5 px-3 py-1 rounded-lg">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-10 text-sm">
          <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-secondary font-medium">Popular</span>
          </div>
          <div className="flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full">
            <Flame className="w-4 h-4 text-destructive" />
            <span className="text-destructive font-medium">Spicy</span>
          </div>
        </div>

        {/* Pure Veg Badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/30 px-6 py-3 rounded-full">
            <div className="w-6 h-6 border-2 border-primary rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
            <span className="text-primary font-medium">100% Pure Vegetarian</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          * Prices are subject to change. GST applicable as per government norms.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;