import { useQuery } from '@tanstack/react-query'
import { getApiDatas } from '../Api/api'
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';
import AddToCart from '../Components/AddToCart';
const Dashboard = () => {
  const navigate = useNavigate()
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["getData"],
        queryFn: getApiDatas
    })

    const {userData} = useContext(AuthContext);
    const {handleAddToCart} = useContext(CartContext);

  return (
    <div>
        {isLoading && <p>....Loading</p>}
        {isError && <p>{error}</p>}


        <div className='grid grid-cols-4 gap-4 justify-center items-center'>
          {data?.products?.map((item)=>(
            <div key={item.id} className='p-4 flex flex-col gap-2 justify-center items-center'>
              <img src={item.images} alt={item.images} style={{height:"250px",width:"250px"}}/>
              <h3 className='text-2xl font-bold text-center cursor-pointer' onClick={()=> navigate(`/singleproduct/${item.id}`)}>{item.title}</h3>
              <h3 className='text-lg font-medium text-left'>Rating: {item.rating}</h3>
              <h3 className='text-lg font-medium text-left'>$ {item.price}</h3>
              <button className='bg-emerald-400 px-4 py-2 rounded-2xl cursor-pointer' onClick={()=>handleAddToCart(item)}>Add to cart</button>
            </div>
          ))}
        </div>

        <AddToCart />



    </div>
  )
}

export default Dashboard