export const BasketItem = ({ id, title, price, count,subtotal= price * count, addItem, delItem, removeItem }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{subtotal}</td>
            <td>
                <button onClick={() => addItem(id)}>+</button>
                <button onClick={() => delItem(id)}>-</button>
                <button onClick={() => removeItem(id)}>x</button>
            </td>
        </tr>
    );
};
