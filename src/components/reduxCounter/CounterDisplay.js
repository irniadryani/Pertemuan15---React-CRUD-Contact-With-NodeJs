import React from "react";
import { useSelector } from "react-redux"; // Menggunakan useSelector dari react-redux untuk mengambil state dari store.

//Komponen CounterDisplay untuk menampilkan nilai total count dari store Redux.
const CounterDisplay = () => {
  const count = useSelector((state) => state); // Mengambil nilai state dari store Redux

  return (
    <div className="flex justify-center">
      <h1 className="font-bold">Total Count: {count}</h1>
    </div>
  );
};

export default CounterDisplay;
