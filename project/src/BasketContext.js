
import React from 'react'

export const BasketContext = React.createContext()

export const initialState = {
    items: [
        {
            id: 101,
            title: "Psychology",
            price: 20,
            photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744098556/9780744098556_cover.jpg"
        },
        {
            id: 102,
            title: "Math",
            price: 16,
            photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744081619/9780744081619_cover.jpg"
        },
        {
            id: 103,
            title: "English",
            price: 14,
            photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744060188/9780744060188_cover.jpg"
        },
        {
            id: 104,
            title: "History",
            price: 24,
            photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744084962/9780744084962_cover.jpg"
        },
        {
            id: 105,
            title: "Architecture",
            price: 30,
            photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744084986/9780744084986_cover.jpg"
        }
    ],
    basket: [],
    total:0
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const found = state.basket.find(item => item.id === action.payload.id)
            const newBasket = found
                ? state.basket.map(item =>
                    item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
                )
                : [...state.basket, { ...action.payload, count: 1 }]
            return {
                ...state,
                basket: newBasket,
                total: newBasket.reduce((a, b) => a + (b.price * b.count), 0)
            }
        case 'INCREMENT_ITEM':
            const incrementedBasket = state.basket.map(item =>
                item.id === action.payload ? { ...item, count: item.count + 1 } : item
            )
            return {
                ...state,
                basket: incrementedBasket,
                total: incrementedBasket.reduce((a, b) => a + (b.price * b.count), 0)
            }
        case 'DECREMENT_ITEM':
            const decrementedBasket = state.basket.map(item =>
                item.id === action.payload ? { ...item, count: item.count - 1 } : item
            ).filter(item => item.count > 0)
            return {
                ...state,
                basket: decrementedBasket,
                total: decrementedBasket.reduce((a, b) => a + (b.price * b.count), 0)
            }
        case 'REMOVE_ITEM':
            const filteredBasket = state.basket.filter(item => item.id !== action.payload)
            return {
                ...state,
                basket: filteredBasket,
                total: filteredBasket.reduce((a, b) => a + (b.price * b.count), 0)
            }
        case 'TOTAL':
            return {
                ...state,
                total: state.basket.reduce((a, b) => a + (b.price * b.count), 0)
            }
        default:
            return state;
    }
}

