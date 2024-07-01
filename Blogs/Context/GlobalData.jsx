import React, { createContext, useReducer } from "react";
import Reducer from "../components/Reducer"; // Assuming Reducer is defined elsewhere

// Initial data
const initialState = [
    {title:'test',content:'test',key:1}
];

// Create context
export const Context = createContext(); // Use a descriptive name for better context

// Context Provider component
const GlobalDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState); // Use initialState

  // Action creator function
  const AddBlog = (title,content) => {
    dispatch({ type: 'ADD_BLOG',payload:{title,content} });
  };
  const DeleteBlog = (id) => {
   dispatch({
    type:'DELETE_BLOG',
    payload:id
   })
    
  };
const EditBlogs = (id) => {
 dispatch({
  type:'EDIT_BLOG',
  payload:id
 })
}
  return (
    <Context.Provider value={{ data: state, AddBlog,DeleteBlog,EditBlogs }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalDataProvider;
