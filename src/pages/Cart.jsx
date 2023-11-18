import { useState } from "react";
import CartCards from "../components/CartCards"
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems=JSON.parse(localStorage.getItem("lscartItems"));
  const [cart,setCart]=useState(cartItems? [...cartItems]:[]);
  const nav=useNavigate();
  const total=cart?.reduce((p,c)=>p + c.price * c.qty,0);
  console.log(cart)
  const allClear=()=>{
    setCart([]);
    localStorage.removeItem("lscartItems");
  }
  const success=()=>{
    allClear();
    nav("/success")
  }
  const removeFromCart=(id)=>{
    setCart(cart?.filter((item)=>item.id !== id));
    localStorage.setItem("lscartItems",JSON.stringify(cart?.filter((item)=>item.id !== id)))
  }
  const increase=(id)=>{
    setCart(cart?.map(pd=>{
      if (pd.id===id) {
         pd.qty++;
      }
      return pd;
    }))
  }
  const decrease=(id)=>{
  setCart(cart?.map(pd=>{
      if (pd.id === id && pd.qty>1) {
        pd.qty--;
      }
      return pd;
    }
  ))}

  if (cart?.length === 0) {
    return(
      
      <div className=" flex justify-center items-center h-screen mx-auto">
        <Link to={"/"}>
       <button className=" text-white bg-gray-600 hover:bg-gray-500 py-3 px-3 rounded-xl">
       plz select your items
       </button>
        </Link>
      </div>
    )
  }
  return (
    <>
    <div>
      <Link  to={"/"}>
        <div className=" flex justify-start ps-10">
      <button className=" px-3 py-2 bg-gray-600 hover: bg-gray-500">
        Home
      </button>
        </div>
      </Link>
    </div>
    {cart.map(item =>{
      return(
        <CartCards key={item.id} item={item} increase={increase} decrease={decrease} removeFromCart={removeFromCart} />
      )
    })}

<hr className=" w-[80%] mx-auto border py-1 bg-gray-600" />
    <div className=" flex justify-around  py-3 my-5">
      <p className=" text-3xl font-bold">
        Total
      </p>
      <p className=" text-2xl font-bold">$ - {total.toFixed(2)}</p>
    </div>
    
    <div className=" flex text-white justify-center py-10 gap-5">
      <button onClick={allClear} className=" px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded-xl">All Clear</button>
      <button onClick={success} className=" px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded-xl">Success</button>
    </div>
    </>
  )
}

export default Cart