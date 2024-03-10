import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImages = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [speedRunEth, setSpeedRunEth] = useState(null);
  const [corvee, setCorvee] = useState(null);
  const [simplyByPapo, setSimplyByPapo] = useState(null);
  const [thinkful, setThinkful] = useState(null);
  const [ethDenver, setEthDenver] = useState(null);
  const [codehawks, setCodehawks] = useState(null);
  const [vue, setVue] = useState(null);
  const [restaurantReservation, setRestaurantReservation] = useState(null);
  const [amazonSellingPartnerAPI, setAmazonSellingPartnerAPI] = useState(null);

  const imageSrcMap = {
    speedRunEth,
    corvee,
    simplyByPapo,
    thinkful,
    ethDenver,
    codehawks,
    vue,
    restaurantReservation,
    amazonSellingPartnerAPI
  }

  function setImageSrc(key, src) {
    if (key === 'speedRunEth') {
      setSpeedRunEth(src)
    }
    if (key === 'corvee') {
      setCorvee(src)
    }
    if (key === 'simplyByPapo') {
      setSimplyByPapo(src)
    }
    if (key === 'thinkful') {
      setThinkful(src)
    }
    if (key === 'ethDenver') {
      setEthDenver(src)
    }
    if (key === 'codehawks') {
      setCodehawks(src)
    }
    if (key === 'vue') {
      setVue(src)
    }
    if (key === 'restaurantReservation') {
      setRestaurantReservation(src)
    }
    if (key === 'amazonSellingPartnerAPI') {
      setAmazonSellingPartnerAPI(src)
    }
  };

  return (
    <ImageContext.Provider value={{ imageSrcMap, setImageSrc }}>
      {children}
    </ImageContext.Provider>
  );
};
