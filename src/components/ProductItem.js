function ProductItem(props) {
    return (
        <div className="item-card">
            <h2>{props.title}</h2> 
            <img src={props.src}/>
            <ul>
                <li>PRICE: {props.price}</li>
                <li>DESCRIPTION: {props.desc}</li>
                <li>RATING: {props.rating}</li>
                <li>STOCK: {props.stock}</li>
                <li>BRAND: {props.brand}</li>
                <li>CATEGORY: {props.category}</li>
            </ul>
            <button className="btn_atc" state="0" name="1">ADD TO CART</button>
            <button className="btn_buy">BUY NOW</button>
        </div>
    );
}

export default ProductItem;