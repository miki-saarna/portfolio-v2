import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImages = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [speedRunEth, setSpeedRunEth] = useState(null);
  const [corvee, setCorvee] = useState(null);
  const [simplyByPapo, setSimplyByPapo] = useState(null);

  const imageSrcMap = {
    speedRunEth,
    corvee,
    simplyByPapo
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
  };

  return (
    <ImageContext.Provider value={{ imageSrcMap, setImageSrc }}>
      {children}
    </ImageContext.Provider>
  );
};
