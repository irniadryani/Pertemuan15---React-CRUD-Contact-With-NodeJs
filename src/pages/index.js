import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <p class="font-sans font-bold text-4xl text-center">React Materials</p>

      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">Youtube Clone</p>
              <Link to="/searchVid" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl my-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">Clock</p>
              <Link to="/clock" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl mb-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">Redux</p>
              <Link to="/redux" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl my-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">Comment</p>
              <Link to="/comment" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl mb-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">Form</p>
              <Link to="/form" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl mb-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">Search Image</p>
              <Link to="/searchImg" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl mb-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold">React Final Form</p>
              <Link to="/reactFinalForm" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl mb-3">
        <div className="card-body">
          <div className="card-actions justify-end"></div>
          <div>
            <div className="card flex flex-row gap-5 w-full">
              <p className="text-start items-center font-bold"> Another React Final Form</p>
              <Link to="/anotherReactFinarForm" className="btn btn-warning justify-end items-center">
                Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
