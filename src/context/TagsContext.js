import React, { useReducer, useContext, createContext, useEffect } from "react";
import { tagsReducer, initialState } from "../reducers/tagsReducer";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../lib/firebase";

const TagsContext = createContext();
const TagsDispatchContext = createContext();

export const TagsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tagsReducer, initialState());
  const [value] = useCollection(
    firebase.firestore().collection("tags")
  );

  const setLocalStorageTags = (tagsFromFirebase) => {
    const tags = {
      tags: tagsFromFirebase,
    };

    localStorage.setItem("tags", JSON.stringify(tags));
  };

  useEffect(() => {
    if (value) {
      const tags = value.docs.map((tag) => tag.data());
      dispatch({ type: "SET_TAGS", payload: tags });
      setLocalStorageTags(tags);
    }
  }, [value]);

  return (
    <TagsDispatchContext.Provider value={dispatch}>
      <TagsContext.Provider value={state}>{children}</TagsContext.Provider>
    </TagsDispatchContext.Provider>
  );
};

export const useTags = () => {
  return useContext(TagsContext);
};
export const useDispatchTags = () => {
  return useContext(TagsDispatchContext);
};
