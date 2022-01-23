import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';
import { addItem, delItem } from "../redux/actions/index";


const Product = () => {

    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    const dispatch = useDispatch();

    //get selected product
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
            <div class="spinner-border spinRadius my-5 mx-auto" role="status">
          <span class="sr-only">Loading...</span>
        </div>
            </>
        )
    }

    //show selected product details
    const ShowProduct = () => {
        return (
            <>
            <div className="row divProdDetails">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="300px" width="300px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h3 className="display-5">
                        {product.title}
                    </h3>
                    <p className="lead">Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h4 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h4>
                    <p className="lead prodDesc">
                        {product.description}
                    </p>
                    <button className="btn btn-outline-dark px-4 py-2 btnAdd" onClick={()=>handleCart(product)}>
                        {cartBtn}
                    </button>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                    
                </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default Product;