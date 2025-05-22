import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/eventData.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="py-12 bg-green-50 dark:bg-green-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800 dark:text-green-100">
          🌿 Upcoming Gardening Events 🌿
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-green-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-green-600 dark:text-green-200 mb-1">
                  📅 {event.date}
                </p>
                <p className="text-sm text-green-600 dark:text-green-200">
                  📍 {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
