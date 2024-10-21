
import ProductCard from '../components/ProductCard'
import { useSelector , useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

const Home = () => {
    const items = useSelector((state)=>state.product.productdata);
 
          


  return (
    <div className='home  gap-5'>
       <section></section>
       <div className='flex justify-between items-center w-full'>
        <h1 className='text-4xl'>Latest Products</h1>
        <Link className='text-xl link' to="/search">More</Link>
       </div>
       <div className='w-full flex flex-wrap justify-center items-center gap-4'>
        {items.map((item)=>(
        <ProductCard item={item} key={item.id}/>
       ))}
       </div>
       
     
    </div>
  )
}

export default Home
