import { useSelector } from "react-redux";

const TotalPrice=()=>{
    const products = useSelector(state=> state.products);
    const totalPrice =()=>{
        return products.reduce((s, p) => s + p.price,0)
    };
    return(
        <div>
          <p>Total Price: {totalPrice()}</p>
        </div>
    )
}
export default TotalPrice;