import { useCallback } from "react";
import { db } from "../services/firebase";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";

export const useFirestore = () => {
  const addToWatchlist = async (userId, dataId, data) => {
    if (!userId || !dataId || !data) {
      throw new Error("Invalid parameters for adding to watchlist");
    }
    try {
      await setDoc(doc(db, "users", userId, "watchList", dataId), data);
    } catch (error) {
      console.error("Error adding to watchlist: ", error);
      throw new Error("Could not add to watchlist");
    }
  };

  const checkIfInWatchList = async (userId, dataId) => {
    if (!userId || !dataId) {
      return false; // Return false if parameters are invalid
    }
    try {
      const docRef = doc(
        db,
        "users",
        userId.toString(),
        "watchList",
        dataId.toString()
      );
      const doSnap = await getDoc(docRef);
      return doSnap.exists();
    } catch (error) {
      console.error("Error checking watchlist: ", error);
      return false; // Return false in case of error
    }
  };

  const removeFromWatchlist = async (userId, dataId) => {
    try {
      await deleteDoc(doc(db, "users", userId, "watchList", dataId));
    } catch (error) {
      console.error("Error while deleting from watchlist: ", error);
      throw new Error("Failed to remove from watchlist");
    }
  };

  const getWatchlist = useCallback(async (userId) => {
    if (!userId) {
      throw new Error("Invalid userId provided");
    }

    const querySnapshot = await getDocs(
      collection(db, "users", userId, "watchList")
    );

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return data;
  }, []); // Dependency array is empty because userId is a parameter
  return {
    addToWatchlist,
    checkIfInWatchList,
    removeFromWatchlist,
    getWatchlist,
  };
};
