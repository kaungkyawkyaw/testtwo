import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"

const Detail = () => {
  const {id}=useParams();
  const [item,setItems]=useState({});
  const fetchitem=async()=>{
    const api=await fetch(`https://fakestoreapi.com/products/${id}`);
    const data=await api.json();
    setItems(data)
  };
  useEffect(()=>{
    fetchitem()
  },[])

  return (
    <>
    <div>
      <div className=" flex justify-start text-white ps-10 pt-10 gap-3">
        <Link to={"/"}>
        <button className="py-2 px-4 bg-gray-600 rounded-xl hover:bg-gray-500">
          <BiArrowBack/>
        </button>
        </Link>

      </div>
    <div className=" h-screen flex justify-center align-middle items-center">
      <div className=" flex justify-center">
        <div className=" flex justify-center w-[50%]">
        <img src={item.image} width="300px" height="300px" alt="" />
        </div>
        <div className=" w-[50%] p-10 flex items-start flex-col gap-5">
          <p className=" text-3xl font-bold ">
            {item.title}
          </p>
          <p className=" text-gray-400">
            {item.description}
          </p>
          <p className=" text-xl font-bold text-gray-400">
            $ - {item.price}
          </p>
          <button className=" bg-slate-500 text-white py-2 px-3 rounded-xl hover:bg-slate-600">
            Buy Now
          </button>

        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Detail