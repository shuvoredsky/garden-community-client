import React from "react";
import ActiveGardeners from "../Components/ActiveGardeners";
import ShareTipForm from "./ShareTipForm";
import GardenerTips from "../Components/GardenerTips";

const Home = () => {
  return (
    <div>
      <ActiveGardeners></ActiveGardeners>
      {/* <ShareTipForm></ShareTipForm> */}
      <GardenerTips></GardenerTips>
    </div>
  );
};

export default Home;
