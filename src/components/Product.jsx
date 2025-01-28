import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/ProductSlice";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div>
           <p>Product Data</p>
           <h1>😂😂😊😊😘😍</h1>
           <h2>💋💖😃🎶</h2>
           <h3>👏😜😢</h3>
           <p>Name: {product.name}</p>
           <p>Price: {product.price}</p>
           <button onClick={() => {dispatch(deleteProduct(product.id)); }} >Remove</button>
        </div>
    );
};
export default Product;
