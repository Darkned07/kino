import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function useGetKino() {
  const getKino = async (col, id) => {
    const docRef = doc(db, col, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "xato";
    }
  };
  return { getKino };
}
