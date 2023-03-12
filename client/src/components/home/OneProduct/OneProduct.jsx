import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { State } from '../../../States';
import ProductItem from '../utils/ProductItem/ProductItem';

function OneProduct() {
    const params = useParams();
    const state = useContext(State);
    const {product} = state.ProductApi.products;
    const [detailsP, setDetailsP] = useState([]);
    
    useEffect(() => {
        if (params) {
            product.forEach(product => {
                if (product._id === params.id) setDetailsP(product);
            })
        }
    }, [params, product]);

    if (detailsP.length === 0) return null;

  return (
    <div className='detail'>
        <img src={detailsP.images.url} alt=""/>
        <div className='box-detail'>
            <div className='row'>
                <h2>{detailsP.title}</h2>
                <h3>{detailsP.category}</h3>
            </div>
            <h4>{detailsP.brand}</h4>
            <span>$ {detailsP.price}</span>
            <p>{detailsP.description}</p>
            <p>Sold: {detailsP.sold}</p>
            <p>Country: {detailsP.country}</p>
            <Link to="/cart" className='cart'>Buy Now</Link>
        </div>

        <div>
            <h2>Related product</h2>
            <div className='product'>
                {
                    product.map(product => {
                        return product.category === detailsP.category ?
                         <ProductItem key={product._id} product={product}/> : null
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default OneProduct
