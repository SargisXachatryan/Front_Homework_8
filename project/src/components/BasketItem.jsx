import { useContext } from "react"
import { BasketContext } from "../BasketContext"

export const BasketItem = ({ id, title, price, count }) => {
    const { dispatch } = useContext(BasketContext)

    const addItem = () => dispatch({ type: "INCREMENT_ITEM", payload: id })
    const delItem = () => dispatch({ type: "DECREMENT_ITEM", payload: id })
    const removeItem = () => dispatch({ type: "REMOVE_ITEM", payload: id })

    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{price * count}</td>
            <td>
                <button onClick={addItem}>+</button>
                <button onClick={delItem}>-</button>
                <button onClick={removeItem}>x</button>
            </td>
        </tr>
    )
}