import { BasketItem } from "./BasketItem"

export const Basket = ({ items, addItem, delItem, removeItem,total }) => {
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
                    {items.map(elm => (
                        <BasketItem key={elm.id} {...elm} addItem={addItem} delItem={delItem} removeItem={removeItem} />
                    ))}
                </tbody>
            </table>
            <h4>Total: {total}</h4>
        </div>
    )
}
