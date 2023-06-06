import { useState } from "react";
import CartContainer1 from "./CartContainer1";
import Navbar1 from "./Navbar1";
import { useGlobalContext } from "./context";

const App1 = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <div className="loading">{/* <h1>loading...</h1> */}</div>;
  }
  return (
    <main>
      <Navbar1 />
      <CartContainer1 />
    </main>
  );
};
export default App1;
