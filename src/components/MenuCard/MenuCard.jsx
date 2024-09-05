import React from "react";
import star from "../../assets/star.png";

const MenuCard = ({ resData }) => {
  const { dsc, img, name, price, rate, country } = resData;

  return (
    <div className="m-10 p-2 w-[250px] h-[400px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
      <div>
        <img className="h-40 w-full object-cover rounded-md" src={img} />
      </div>

      <div className="flex-col items-center m-2">
        <h3 className="font-bold py-2 text-lg text-center truncate ...">{name}</h3>
        <h4 className="font-bold  text-sm text-center">{country}</h4>
        <p className="font-medium py-2 text-center text-sm truncate ...">{dsc}</p>

        <div className="flex justify-evenly">
          <h4 className="font-bold">₹{price} </h4>
          <h4 className="flex items-center px-4">
            <img className="w-6" src={star} alt="" />
            {rate + ".0"} stars
          </h4>
        </div>

        <button className=" mt-4 bg-orange-600 text-white font-bold rounded-xl w-full p-2 cursor-pointer justify-center">
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
