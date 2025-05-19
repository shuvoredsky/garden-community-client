import React, { useEffect, useState } from "react";

const ActiveGardeners = () => {
  const [activeGardener, setActiveGardener] = useState([]);
  useEffect(() => {
    fetch("gardeners.json")
      .then((res) => res.json())
      .then((data) => {
        const activeGardeners = data.filter(
          (single) => single.status == "active"
        );
        setActiveGardener(activeGardeners);
      });
  }, []);
  return (
    <div>
      <h1 className="text-black text-3xl text-center font-bold py-6">
        Active Gardeners
      </h1>

      <div className="grid grid-cols-3 gap-5 my-5">
        {activeGardener.map((gardener) => (
          <div key={gardener.id} className=" border-green-300 border-2">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  className=" mx-auto mb-2 object-cover"
                  src={gardener.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{gardener.name}</h2>
                <p className="text-green-600">{gardener.status}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveGardeners;
