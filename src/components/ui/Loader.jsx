import React, { useEffect, useState } from "react";
import loader from "../../assets/loadergif.gif";
import "../../styles/index.css";
import { motion } from "framer-motion";
function Loader() {
  const [showLoader, setShowLoader] = useState(true);
  // Set a delay for the loader display
  useEffect(() => {
    const loaderDelay = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Set to 2000ms (2 seconds) or your desired delay time

    return () => clearTimeout(loaderDelay);
  }, []);
return (
  showLoader && (
    <div className="movie_loader">
      <motion.img
        src={loader}
        alt="Loading..."
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
);
}

export default Loader;
