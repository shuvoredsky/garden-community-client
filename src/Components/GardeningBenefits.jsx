import React from "react";

const GardeningBenefits = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 dark:text-green-100 mb-12">
          🌿 Why Gardening is Good for You
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-green-800 p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-green-900 dark:text-white mb-2">
                {benefit.icon} {benefit.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Stress Relief",
    icon: "🌱",
    description:
      "Gardening calms your mind, reduces anxiety, and promotes inner peace through nature.",
  },
  {
    title: "Physical Activity",
    icon: "💪",
    description:
      "Regular gardening helps improve flexibility, strength, and overall fitness.",
  },
  {
    title: "Healthy Eating",
    icon: "🍅",
    description:
      "Homegrown food is healthier, chemical-free, and encourages a nutritious lifestyle.",
  },
  {
    title: "Creative Expression",
    icon: "🌸",
    description:
      "Designing your garden gives you a chance to express your personality and creativity.",
  },
  {
    title: "Family Bonding",
    icon: "👨‍👩‍👧",
    description:
      "Gardening is a great activity for family time and teaching kids about nature.",
  },
  {
    title: "Eco-Friendly Habit",
    icon: "🌍",
    description:
      "Growing your own food helps reduce carbon footprint and supports a greener planet.",
  },
];

export default GardeningBenefits;
