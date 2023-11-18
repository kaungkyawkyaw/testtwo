import { Link } from "react-router-dom"

const ProductCards = ({item,addToCart,removeFromCart}) => {
  const cartItems=JSON.parse(localStorage.getItem("lscartItems"))
  return (
    <>
     <div className=" flex flex-col w-[250px] h-[500px] justify-center border rounded-lg ">
        <div className="flex justify-center items-center h-[330px] overflow-hidden border m-5 p-5">
            <img className="object-contain p-5" src={item.image} />
        </div>
        <div className=" flex justify-center h-[50px] p-5">
        <p>{item.title.substring(0,20)}...</p>

        </div>
        <div className=" flex justify-start items-center h-[50px]">
            <p className=" pl-10">$ - {item.price}</p>
        </div>
        <div className=" flex flex-col text-white gap-2 h-[100px]">
            {cartItems?.find(pd => pd.id === item?.id) ? (
                <div className="  flex justify-center">
                <button onClick={()=> removeFromCart(item.id)} className=" w-[80%] hover:bg-red-400 bg-red-500 rounded-xl px-3 py-1">Remove From Cart</button>
            </div>
            ):(
            <div className="  flex justify-center">
                <button onClick={ ()=> addToCart({...item,qty:1}) }  className=" w-[80%] hover:bg-gray-400 bg-gray-500 rounded-xl px-3 py-1">Add To Cart</button>
            </div>
            )}
            <Link to={`/detail/${item.id}`}>
            <div className="  flex justify-center">
                <button className=" w-[80%] hover:bg-gray-400 bg-gray-500 rounded-xl px-3 py-1">Detail</button>
            </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default ProductCards