import { useState } from "react";
import { Clock, Flame, Star } from "lucide-react";

const menuCategories = [
  { id: "snacks", name: "Snacks", icon: "🍿" },
  { id: "breakfast", name: "Breakfast", icon: "🌅" },
  { id: "fasting", name: "Fasting Menu", icon: "🙏" },
  { id: "sandwiches", name: "Sandwiches", icon: "🥪" },
  { id: "burgers", name: "Burgers", icon: "🍔" },
  { id: "pavbhaji", name: "Pav Bhaji", icon: "🍛" },
  { id: "soups", name: "Soups", icon: "🍲" },
];

const menuItems: Record<string, Array<{ name: string; price: number; description?: string; isPopular?: boolean; isSpicy?: boolean }>> = {
  snacks: [
    { name: "Samosa (2 pcs)", price: 30, description: "Crispy pastry with spiced potato filling", isPopular: true },
    { name: "Kachori (2 pcs)", price: 40, description: "Flaky pastry with dal filling" },
    { name: "Pani Puri (6 pcs)", price: 40, description: "Crispy puris with spiced water", isPopular: true },
    { name: "Bhel Puri", price: 50, description: "Tangy puffed rice mixture", isSpicy: true },
    { name: "Sev Puri (6 pcs)", price: 50, description: "Crispy puris with chutneys and sev" },
    { name: "Dahi Puri (6 pcs)", price: 60, description: "Sweet and tangy yogurt puris" },
    { name: "Pav Sandwich", price: 35, description: "Mumbai style bread sandwich" },
    { name: "Dabeli", price: 40, description: "Sweet and spicy potato in pav", isPopular: true },
    { name: "Vada Pav", price: 35, description: "Spicy potato fritter in bun", isSpicy: true },
    { name: "Spring Roll (4 pcs)", price: 60, description: "Crispy vegetable rolls" },
  ],
  breakfast: [
    { name: "Plain Dosa", price: 60, description: "Crispy rice crepe" },
    { name: "Masala Dosa", price: 80, description: "Dosa with spiced potato filling", isPopular: true },
    { name: "Butter Masala Dosa", price: 100, description: "Buttery dosa with potato" },
    { name: "Cheese Dosa", price: 110, description: "Dosa with melted cheese" },
    { name: "Mysore Masala Dosa", price: 100, description: "Spicy red chutney dosa", isSpicy: true },
    { name: "Idli (2 pcs)", price: 40, description: "Steamed rice cakes" },
    { name: "Idli Sambhar (3 pcs)", price: 60, description: "Idli with lentil soup", isPopular: true },
    { name: "Medu Vada (2 pcs)", price: 50, description: "Crispy lentil donuts" },
    { name: "Uttapam", price: 70, description: "Thick rice pancake with toppings" },
    { name: "Upma", price: 50, description: "Savory semolina dish" },
    { name: "Poha", price: 45, description: "Flattened rice with spices" },
    { name: "Aloo Paratha", price: 70, description: "Potato stuffed flatbread" },
  ],
  fasting: [
    { name: "Sabudana Khichdi", price: 70, description: "Tapioca pearls with peanuts", isPopular: true },
    { name: "Sabudana Vada (2 pcs)", price: 60, description: "Crispy tapioca fritters" },
    { name: "Kuttu Puri (4 pcs)", price: 80, description: "Buckwheat flour puris" },
    { name: "Rajgira Paratha", price: 80, description: "Amaranth flour flatbread" },
    { name: "Fruit Salad", price: 60, description: "Fresh seasonal fruits" },
    { name: "Singhara Atta Halwa", price: 50, description: "Sweet water chestnut flour halwa" },
    { name: "Aloo Jeera (Fasting)", price: 70, description: "Cumin tempered potatoes" },
    { name: "Makhana", price: 80, description: "Roasted fox nuts with ghee" },
  ],
  sandwiches: [
    { name: "Veg Sandwich", price: 50, description: "Fresh vegetables in bread" },
    { name: "Cheese Sandwich", price: 70, description: "Melted cheese sandwich" },
    { name: "Grilled Sandwich", price: 80, description: "Toasted vegetable sandwich", isPopular: true },
    { name: "Cheese Grilled Sandwich", price: 100, description: "Grilled with extra cheese" },
    { name: "Club Sandwich", price: 120, description: "Triple decker delight" },
    { name: "Paneer Sandwich", price: 100, description: "Cottage cheese filling" },
    { name: "Corn Cheese Sandwich", price: 110, description: "Sweet corn with cheese" },
    { name: "Jain Sandwich", price: 70, description: "No onion, no garlic" },
  ],
  burgers: [
    { name: "Aloo Tikki Burger", price: 60, description: "Classic potato patty burger", isPopular: true },
    { name: "Veg Cheese Burger", price: 80, description: "Vegetable patty with cheese" },
    { name: "Paneer Burger", price: 100, description: "Spiced paneer patty", isPopular: true },
    { name: "Corn Burger", price: 90, description: "Sweet corn patty burger" },
    { name: "Jumbo Burger", price: 120, description: "Extra large veg burger" },
    { name: "Mexican Burger", price: 110, description: "Spicy Mexican style", isSpicy: true },
  ],
  pavbhaji: [
    { name: "Pav Bhaji (Regular)", price: 80, description: "Classic Mumbai pav bhaji", isPopular: true },
    { name: "Pav Bhaji (Special)", price: 100, description: "Extra butter and cheese" },
    { name: "Cheese Pav Bhaji", price: 120, description: "Topped with grated cheese" },
    { name: "Paneer Pav Bhaji", price: 130, description: "With cottage cheese cubes" },
    { name: "Jain Pav Bhaji", price: 90, description: "No onion, no garlic" },
    { name: "Dry Bhaji (No Pav)", price: 60, description: "Just the bhaji" },
  ],
  soups: [
    { name: "Tomato Soup", price: 60, description: "Classic tangy tomato", isPopular: true },
    { name: "Sweet Corn Soup", price: 70, description: "Creamy corn soup" },
    { name: "Hot & Sour Soup", price: 70, description: "Spicy and tangy", isSpicy: true },
    { name: "Manchow Soup", price: 80, description: "Indo-Chinese style" },
    { name: "Cream of Mushroom", price: 90, description: "Rich mushroom cream soup" },
    { name: "Mixed Veg Soup", price: 70, description: "Healthy vegetable broth" },
  ],
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("snacks");

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Pav Bhaji Timing Notice */}
        {activeCategory === "pavbhaji" && (
          <div className="flex items-center justify-center gap-2 mb-8 text-secondary">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Available: 5:00 PM - 10:30 PM</span>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    {item.isPopular && (
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                    )}
                    {item.isSpicy && (
                      <Flame className="w-4 h-4 text-destructive" />
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
                <span className="font-serif text-lg font-bold text-primary whitespace-nowrap">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span>Popular</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-destructive" />
            <span>Spicy</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prices are subject to change. All items are 100% vegetarian.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
