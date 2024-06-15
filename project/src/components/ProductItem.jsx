export const ProductItem = ({ title, id, price, photo, onMove }) => {
    return (
        <div>
            <img src={photo} alt={title} />
            <p>{title}</p>
            <p><strong>{price} USD</strong></p>
            <button onClick={() => onMove(id)}>Move</button>
        </div>
    )
}
