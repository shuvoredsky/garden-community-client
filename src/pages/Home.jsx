import React from "react";
import ActiveGardeners from "../Components/ActiveGardeners";
import EventSlider from "../Components/EventSlider";
import GardenerTips from "../Components/GardenerTips";
import Events from "./Events";
import GardeningBenefits from "../Components/GardeningBenefits";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Garden | Home</title>
      </Helmet>
      <EventSlider></EventSlider>
      <GardenerTips></GardenerTips>
      <ActiveGardeners></ActiveGardeners>
      <Events></Events>
      <GardeningBenefits></GardeningBenefits>
    </div>
  );
};

export default Home;
