import { useSelector, useDispatch } from 'react-redux'
import { addProduct, fetchProducts } from './rtk/slices/products-slice';
import { useEffect } from 'react';

export default function Products() {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  

  return (
    <>

    <h1>Products</h1>
    <button onClick={()=> dispatch(addProduct({id: 2, title: "PS5"}))}>Add Product</button>

    {
      products.map((p)=>{
        return (<h2 key={p.id}>{p.title}</h2>)
      })
    }

    </>
  )
}
