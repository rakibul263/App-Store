import React from "react";
import Slider from "../../components/Slider/Slider";
import TrendingApps from "../../components/TrendingApps/TrendingApps";
import Productivity from "../../components/Productivity/Productivity";
import Development from "../../components/Development/Development";
import EducationalApp from "../../components/Educational/EducationalApp";
import AppStoreInfo from "../../components/StoreInfo/AppStoreInfo";

const Home = () => {
  return (
    <div className="w-[88%] mx-auto">
      <Slider></Slider>
      <TrendingApps></TrendingApps>
      <Productivity></Productivity>
      <Development></Development>
      <EducationalApp></EducationalApp>
      <AppStoreInfo></AppStoreInfo>
    </div>
  );
};

export default Home;
