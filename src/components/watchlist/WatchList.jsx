import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import TopBar from "../navbars/topBar";
import Footer from "../ui/Footer";
import WatchlistCard from "./WatchlistCard";
import Loader from "../ui/Loader";

export default function WatchList() {
  const { currentUser } = useAuth();
  const { getWatchlist } = useFirestore();
  const navigate = useNavigate();

  const [watchList, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentUser?.uid) {
      getWatchlist(currentUser?.uid)
        .then((data) => {
          setWatchList(data);
          // console.log(data, "data");
        })
        .catch((err) => {
          console.log(err, "error");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [currentUser?.uid, getWatchlist]);


  return (
    <>
      <TopBar />
      {isLoading && <Loader />}
      <div className="pt-40 pb-10">
        {!isLoading && watchList.length === 0 && (
          <div className="flex justify-center items-center pt-40 pb-10">
            <h2 className="text-3xl text-color-light-1 uppercase">
              Watchlist is empty
            </h2>
          </div>
        )}
      </div>
      {!isLoading && watchList.length > 0 && (
        <div className="container mx-auto pt-10 pb-28">
          <div className="grid grid-cols-1 gap-10">
            {watchList.map((item) => {
              return (
                <WatchlistCard
                  item={item}
                  type={item?.type}
                  key={item.id}
                  // setWatchlist={setWatchList}
                />
              );
            })}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
