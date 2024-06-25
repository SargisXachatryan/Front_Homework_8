import { useContext } from "react"
import { BasketContext } from "../BasketContext"
import { ProductItem } from "./ProductItem"

export const ProductList = () => {
    const { state, dispatch } = useContext(BasketContext)
    const { items } = state

    const moveToCart = id => {
        const product = items.find(item => item.id === id)
        dispatch({ type: "ADD_TO_CART", payload: product })
    }

    return (
        <div>
            <h3>Product List</h3>
            <div className="list">
                {items.map(elm => (
                    <ProductItem key={elm.id} {...elm} onMove={moveToCart} />
                ))}
            </div>
        </div>
    )
}