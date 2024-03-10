import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImages = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [speedRunEth, setSpeedRunEth] = useState(null);

  const imageSrcMap = {
    speedRunEth
  }

  function setImageSrc(key, src) {
    if (key === 'speedRunEth') {
      setSpeedRunEth(src)
    }
  };

  return (
    <ImageContext.Provider value={{ imageSrcMap, setImageSrc }}>
      {children}
    </ImageContext.Provider>
  );
};
