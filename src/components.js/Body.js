import { createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Browse from "./Browse";
import React from "react";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utiles.js/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utiles.js/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
console.log("Hello Yuk")
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  });

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
