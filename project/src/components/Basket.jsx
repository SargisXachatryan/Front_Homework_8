import { useContext, useEffect } from "react";
import { BasketContext } from "../BasketContext";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
    const { state, dispatch } = useContext(BasketContext);
    const { basket, total } = state;

    useEffect(() => {
        dispatch({ type: "TOTAL" });
    }, [basket, dispatch]);

    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map(elm => (
                        <BasketItem key={elm.id} {...elm} />
                    ))}
                </tbody>
            </table>
            <h4>Total: {total}</h4>
        </div>
    )
}
