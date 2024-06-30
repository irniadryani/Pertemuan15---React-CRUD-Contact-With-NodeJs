import React from "react";
import ClockFunction from "./ClockFunction"; // Import komponen fungsi Clock

function ClockDisplay() {
  const time = ClockFunction(); // Memanggil fungsi ClockFunction untuk mendapatkan waktu saat ini

  return (
    <div className="flex justify-center">
      <h2 className="text-xl font-bold my-20">{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default ClockDisplay;
