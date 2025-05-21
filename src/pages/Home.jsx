import React from "react";
import ActiveGardeners from "../Components/ActiveGardeners";
import EventSlider from "../Components/EventSlider";
import GardenerTips from "../Components/GardenerTips";

const Home = () => {
  return (
    <div>
      <EventSlider></EventSlider>
      <ActiveGardeners></ActiveGardeners>
      {/* <ShareTipForm></ShareTipForm> */}
      <GardenerTips></GardenerTips>
    </div>
  );
};

export default Home;
