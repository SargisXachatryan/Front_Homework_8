import React from 'react';
import { BasketItem } from "./BasketItem";

export const Basket = ({ items, addItem, delItem, removeItem, applySale, hasUsedSale }) => {
    return (
        <div>
            <h3>Basket</h3>
            {!hasUsedSale && items.length > 0 && (
                <button className="sale" onClick={applySale}>Apply Sale</button>
            )}
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
                        <BasketItem
                            key={elm.id}
                            {...elm}
                            addItem={addItem}
                            delItem={delItem}
                            removeItem={removeItem}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
