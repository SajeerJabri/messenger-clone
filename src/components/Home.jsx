import React, {useContext} from "react";
import UserHome from "./UserHome";
import Welcome from "./Welcome";
import { ContextProvider } from "../context/ContextProvider";
const Home = () => {
  const { user } = useContext(ContextProvider);
  return <div>{user ? <UserHome /> : <Welcome />}</div>;
};

export default Home;
