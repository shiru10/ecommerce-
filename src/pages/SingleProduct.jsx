import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router"
import { getSingleApiDatas } from "../Api/api";

const SingleProduct = () => {
    const {id} = useParams();
    const {data,isLoading, isError, error} = useQuery({
        queryKey: ["singleitem"],
        queryFn: ()=>getSingleApiDatas(id),
    })
    console.log(data);
  return (
    <div className="flex justify-center items-center">
        {isLoading && <p>....Loading</p>}
        {isError && <p>{error}</p>}
        <div key={data?.id} className="flex flex-col gap-6 max-w-5xl py-20">
              <img src={data?.images} alt={data?.images} style={{height:"500px",width:"500px"}}/>
              <h3 className='text-2xl font-bold text-left'>{data?.title}</h3>
              <h3 className='text-lg font-medium text-left'>Rating: {data?.rating}</h3>
              <h3 className='text-lg font-medium text-left'>$ {data?.price}</h3>
              <p className='text-lg font-regular text-left'>{data?.description}</p>
              <button className='bg-emerald-400 px-4 py-2 rounded-2xl cursor-pointer max-w-50'>Add To Cart</button>
            </div>
    </div>
  )
}

export default SingleProduct