import { useEffect, useState } from "react"
import Products from "../components/ProductCards";
import Loading from "../components/Loading";
import { Badge, Input } from '@mantine/core';
import {BsCart3} from "react-icons/bs"
import { Link } from "react-router-dom";
const Home = () => {
  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState("");
  const [isLoading,setIsLoading]=useState(true);
  const cartItems=JSON.parse(localStorage.getItem("lscartItems"))
  const [cart,setCart]=useState(cartItems ? [...cartItems]: []);
  // console.log(cart)
  const addToCart=(product)=>{
        setCart([...cart,product]);
        localStorage.setItem("lscartItems",JSON.stringify([...cart,product]));
  };

  const removeFromCart=(id)=>{
    setCart(cart?.filter((item)=>item.id !== id));
    localStorage.setItem("lscartItems",JSON.stringify(cart?.filter((item)=>item.id !== id)))
  }
  const fetchdata=async () =>{
    const api=await fetch(`https://fakestoreapi.com/products/`);
    const data=await api.json();
    setProducts(data);
    setIsLoading(false)
  };
  useEffect(()=>{
    fetchdata()
  },[]);

  if (isLoading) {
    return (
      <Loading/>
    )
  }else{
    return (
      <>
      <div className=" flex justify-around py-6 mb-20 bg-gray-400">
        <div>
        <Input variant="filled" radius="xl"  value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" />
        </div>
        <div className=" relative">
        <Link to={"/cart"}>
        <BsCart3 className=" text-3xl"/>
        <Badge className=" absolute left-5 bottom-8" color="gray" size="xs">{cartItems? cartItems.length:0}</Badge>
        </Link>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-5">
      {products?.filter((pd)=>{
        if (search === "") {
          return pd;
        }else{
         return pd.title.toLowerCase().includes(search);
        }
      })
      ?.map((item)=>{
        return(
          <Products key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
        )
      })}
      </div>
      <div className=" mt-20 py-5  bg-slate-400">
          @2023
      </div>
      </>
    )
  }

}

export default Home