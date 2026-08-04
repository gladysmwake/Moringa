function ItemCard({ title, description, price, image, onSelect }) {
    return (
        <article
            className="item-card clickable"
            onClick={onSelect}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    onSelect?.();
                }
            }}
        >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="item-price">{price}</p>
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    alert(`${title} added to cart`);
                }}
            >
                Add to Cart
            </button>
        </article>
    );
}

export default ItemCard;