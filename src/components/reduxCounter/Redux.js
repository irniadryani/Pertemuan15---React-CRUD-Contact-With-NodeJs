import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";

const Redux = () => {
  return (
    // Memanggil komponen untuk ditampilkan keduanya
    <div className="flex flex-col justify-center">
      <CounterDisplay />
      <CounterButton />
    </div>
  );
};

export default Redux;
