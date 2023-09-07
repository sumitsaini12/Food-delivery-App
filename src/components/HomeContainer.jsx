import React from "react";
import Delivery from "../Img/delivery.png";
import HeroBg from "../Img/heroBg.png";
import I1 from "../Img/i1.png";

function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1  flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aut doloremque quae tempora modi esse excepturi quasi id totam
          deleniti odio delectus nemo libero accusamus nisi, similique eveniet
          fugit ea quisquam tempore corrupti ipsum quia natus! Ipsam tempora
          doloremque est saepe, ea magni voluptatum aliquid dolor nihil
          molestias corrupti doloribus.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="h-370 w-full lg:w-auto lg:h-650 md:ml-auto"
        />
        <div className="w-full h-full absolute flex items-center justify-center top-0 left-0 sm:-left-24">
          <div className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
            <img className="w-40 -mt-20" src={I1} />
            <p className="text-textColor text-lg font-semibold mt-4">
              Icecreem
            </p>
            <p className="text-lighttextGray my-3">Chocloate & vanilla</p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-sm text-red-600">$ </span>5.25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;

// <div key={n.id} className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
//                     <img className="w-40 -mt-20" src={n.imageSrc} />
//                     <p className="text-textColor text-lg font-semibold mt-4">{n.name}</p>
//                     <p className="text-lighttextGray my-3">{n.decp}</p>
//                     <p className="text-sm font-semibold text-headingColor"><span className="text-sm text-red-600">$ </span>{n.price}</p>
//                 </div>

// <div className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
// <img className="w-40 -mt-20" src={I1} />
// <p className="text-textColor text-lg font-semibold mt-4">Icecreem</p>
// <p className="text-lighttextGray my-3">Chocloate & vanilla</p>
// <p className="text-sm font-semibold text-headingColor"><span className="text-sm text-red-600">$ </span>5.25</p>
// </div>

// {heroData && heroData.map((n) => {

//     <div key={n.id} className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
//         sumit
//         <img className="w-40 -mt-20" src={n.imageSrc} />
//         <p className="text-textColor text-lg font-semibold mt-4">{n.name}</p>
//         <p className="text-lighttextGray my-3">{n.decp}</p>
//         <p className="text-sm font-semibold text-headingColor"><span className="text-sm text-red-600">$ </span>{n.price}</p>
//     </div>
// })};
