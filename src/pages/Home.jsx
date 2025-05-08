import React from "react";
import localIcon from "../assets/index.js";

export default function Home() {
  return (
    <>
      <div className="relative">
        <img src={localIcon.bg} alt="" className="w-full h-[500px] z-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold">Disease Prediction System</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam
            minus cupiditate ipsum sapiente voluptas asperiores voluptatum id
          </p>
        </div>
      </div>
      <div className="text-2xl text-center font-bold p-4 text-gray-700">
        DISEASE PREDICTION SYSTEM USING DECISION TREE (ID3) ALGORITHM
      </div>
      <div class="grid grid-cols-3 w-3/4 mx-auto gap-6 space-y-2 p-4">
        <div className="space-y-2">
          <img class="aspect-square" src={localIcon.banner1} />
          <div>
            <h3 className="text-xl text-center font-semibold m-4 text-gray-600">
              Files Management System
            </h3>
            <p className="text-sm text-center leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsam minus cupiditate ipsum sapiente voluptas asperiores
              voluptatum id cum harum,
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <img class="aspect-square" src={localIcon.banner3} />
          <div>
            <h3 className="text-xl text-center font-semibold m-4 text-gray-600">
              User Management System
            </h3>
            <p className="text-sm text-center leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsam minus cupiditate ipsum sapiente voluptas asperiores
              voluptatum id cum harum,
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <img class="aspect-square" src={localIcon.banner2} />
          <h3 className="text-xl text-center font-semibold m-4 text-gray-600">
            Disease Dataset System
          </h3>
          <p className="text-sm text-center leading-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam
            minus cupiditate ipsum sapiente voluptas asperiores voluptatum id
            cum harum,
          </p>
        </div>
      </div>
    </>
  );
}
