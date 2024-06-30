import React, { useEffect, useState } from "react";

function ClockFunction() {
  const [time, setTime] = useState(new Date()); //inisialisasi state

  //function agar waktu dapat berjalan
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); //akan memperbarui waktu setiap detik
    return () => clearInterval(timer);
  }, []);

  return time;
}

export default ClockFunction;
