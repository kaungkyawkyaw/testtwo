import {RiArrowDropUpLine,RiArrowDropDownLine} from "react-icons/ri"
const CartCards = ({item,increase,decrease,removeFromCart}) => {
    const oneItemPrice=item.price * item.qty;
  return (
    <>
     <div className=" flex justify-evenly items-center my-10">
        <div className=" flex gap-7 items-center w-[50%] ">
            <img src={item.image} width={"100px"} height={"100px"} alt="" />
            <div className=" flex flex-col gap-5">
               <div>
               <h1 className=" font-bold text-2xl">{item.title.substring(0,17)}...</h1>
                <p className=" text-sm text-gray-600 font-bold mt-3">$ - {oneItemPrice.toFixed(2)}</p>
               </div>
                <button onClick={()=>removeFromCart(item?.id)}  className=" border w-[100px] bg-red-600 hover:bg-red-500 px-3 rounded-xl">Remove</button>
            </div>
        </div>
        <div className=" flex justify-center items-center gap-3 w-[20%]">
            <button onClick={()=>increase(item?.id)}>
                <RiArrowDropUpLine className=" border bg-gray-600 hover:bg-gray-500 w-10 rounded-xl text-center text-white text-xl"/>
            </button>
            <p className=" font-bold text-2xl">
                {item?.qty}
            </p>
            <button onClick={()=>decrease(item?.id)} >
               <RiArrowDropDownLine  className=" border bg-gray-600 hover:bg-gray-500 w-10 rounded-xl text-center text-white text-xl"/>
            </button>
        </div>
    </div>
    </>
  )
}

export default CartCards