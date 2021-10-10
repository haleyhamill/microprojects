import React, {useState} from "react";

export default function Product({details, ...rest}) {
    const [count, setCount] = useState(0);

    function handleProductCount() {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    return <div className="product">
        <img width="50" alt={details.name} src={details.image}/>
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" disabled={count === 0} onClick={handleProductCount}>-</button>
            <h3 className="product-count" hidden={count === 0}>{count}</h3>
            <button className="product-add" onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
}
