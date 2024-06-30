import React from "react";
import { useDispatch } from "react-redux";

// Komponen CounterButton untuk menampilkan tombol-tombol untuk mengubah nilai counter.
const CounterButton = () => {
  const dispatch = useDispatch(); // Menggunakan useDispatch dari react-redux untuk mengirimkan aksi ke store Redux.

  return (
    <div className="flex justify-center m-5 gap-2">
      <button
        className="btn btn-info"
        onClick={() => dispatch({ type: "INCREMENT" })} // Mengirimkan aksi INCREMENT ke store
      >
        Increment
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "DECREMENT" })} // Mengirimkan aksi DECREMENT ke store
      >
        Decrement
      </button>
      <button
        className="btn btn-error"
        onClick={() => dispatch({ type: "RESET" })} // Mengirimkan aksi RESET ke store
      >
        Reset
      </button>
    </div>
  );
};

export default CounterButton;
