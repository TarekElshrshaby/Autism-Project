import  { useContext } from 'react'
import { CartContext } from '../../context/Card.context';
import { Link } from 'react-router-dom';

export default function ProductCard({productInfo}) {
    let {images , price , title , ratingsAverage , category, id} = productInfo;
    let {addProductToCart} = useContext(CartContext);
  return <>
  <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 xl:p-4 rounded-md overflow-hidden  shadow-lg">
    <div className='relative'>
    <img src={images[0]} alt="" className='w-full' />
    <div className="layer opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center gap-3 absolute bg-black bg-opacity-20 w-full h-full top-0 left-0 ">
        <div className='bg-primary-800 w-10 h-10 rounded-full text-white flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-3'>
            <i className='fa-solid fa-heart'></i>
        </div>
        <Link to={`/details/${id}`} className='bg-primary-800 w-10 h-10 rounded-full text-white flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-3'>
            <i className='fa-solid fa-eye'></i>
        </Link>
        <div onClick={()=>{
            addProductToCart({productId: id})
            }} className='bg-primary-800 w-10 h-10 rounded-full text-white flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:rotate-3'>
            <i className='fa-solid fa-shopping-cart'></i>
        </div>
    </div>
    </div>
    
    <div className='p-3'>
        <h3 className='text-primary-800'>{category.name}</h3>
        <h2 className='text-lg font-semibold line-clamp-2'><Link to={`/details/${id}`} >{title}</Link></h2>
        <div className='flex items-center justify-between mt-4'>
            <span>{price}EGB</span>
            <div className='flex gap-1 items-center'>
                <i className='fa-solid fa-star text-yellow-400'></i>
                <span>{ratingsAverage}</span>
            </div>
        </div>
    </div>
  </div>

  
  
  </>
}
