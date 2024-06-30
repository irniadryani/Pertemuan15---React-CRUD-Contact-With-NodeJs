import React from "react";

// Komponen  untuk  form pencarian  
const SearchForm = ({ search, handleChange, handleSubmit }) => {  //menerima props
  return (
    <div className="flex justify-center w-full p-5">
      <form
        onSubmit={handleSubmit} // Menggunakan handleSubmit saat form di-submit
        className="flex justify-center w-full max-w-2xl"
      >
        <label className="input input-bordered flex items-center gap-2 mx-10 my-5 rounded-full shadow-xl w-full">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={search} // Nilai input diatur oleh properti search
            onChange={handleChange} // Memanggil handleChange saat nilai input berubah
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
