import { Link } from "react-router-dom"

const Success = () => {
  return (
    <>
    <Link to={"/"}>
    <div className=" flex flex-col text-white gap-5 justify-center items-center h-screen mx-auto">
        <div className=" text-3xl">Successful</div>
        <Link to={"/"}>
       <button className=" bg-gray-600 hover:bg-gray-500 py-3 px-3 rounded-xl">
       Go to Shop
       </button>
        </Link>
      </div>
    </Link>
    </>
  )
}

export default Success