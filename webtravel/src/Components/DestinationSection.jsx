import React from "react";
import './DestinationSection.css'

const DestinationSection = () => {
  const Sections = [
    {
      option: 1,
      place: "Italy",
      img: "https://source.unsplash.com/random/800x600?italy",
      description: "Ride through italy to explore more",
    },
    {
      option: 1,
      place: "Australia",
      img: "https://source.unsplash.com/random/800x600?australia",
      description: "Ride throught Australia to explore",
    },
    {
      option: 1,
      place: "Thailand",
      img: "https://source.unsplash.com/random/800x600?thailand",
      description: "Ride through thailand",
    },
  ];

  return (
    <>
      <section className="box">
        <h2>Check Out The Epic Destinations</h2>
        <div className="section-grid">{Sections.map((destination) => (
            <div key={destination.option} className="section-card">
              <img className="section-img" src={destination.img} />
              <h3>{destination.place}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DestinationSection;
