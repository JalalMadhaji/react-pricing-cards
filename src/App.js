import React from "react";
import "./App.css";
import Pricing from "./Pricing";

function App() {
  return (
    <div className="App">
      <Pricing title={"Free"} subTitle={"Try Now"} buttonText={"Try Now"} />
      <Pricing
        title={"Plus"}
        subTitle={"For Limit Time"}
        buttonText={"Buy Now"}
      />
      <Pricing title={"Preimum"} subTitle={"For VIP"} buttonText={"Buy Now"} />
    </div>
  );
}

export default App;
