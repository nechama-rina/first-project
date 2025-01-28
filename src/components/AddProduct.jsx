import { useState } from "react";
import { addProduct } from "../redux/ProductSlice";
import { useDispatch } from "react-redux";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" />
            <button onClick={(e) => {
                if (name.trim() === "" || price===0) return;
                dispatch(addProduct({name:name,price:price}));
                setName("");
                setPrice(0);
            }} >Add New Product</button>
        </div>
    )
}
export default AddProduct;