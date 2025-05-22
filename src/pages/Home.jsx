import React from "react";
import ActiveGardeners from "../Components/ActiveGardeners";
import EventSlider from "../Components/EventSlider";
import GardenerTips from "../Components/GardenerTips";
import Events from "./Events";
import GardeningBenefits from "../Components/GardeningBenefits";

const Home = () => {
  return (
    <div>
      <EventSlider></EventSlider>
      <ActiveGardeners></ActiveGardeners>
      <GardenerTips></GardenerTips>
      <Events></Events>
      <GardeningBenefits></GardeningBenefits>
    </div>
  );
};

export default Home;
