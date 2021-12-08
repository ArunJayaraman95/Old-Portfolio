import React from "react";
import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
return (
	<div className = "pl">
	<div className="pl-texts">
		<div className="pl-title">Arun is Cool</div>
		<p className="pl-desc">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum illo aut saepe temporibus laborum ab commodi perspiciatis quod accusantium architecto, dolore iste iure voluptatibus praesentium reiciendis ratione. Quas, voluptates?   
		</p>
	</div>
	<div className="pl-list">
		{products.map((item) => (
		<Product key = {item.id} img = {item.img} link = {item.link}/>
		))}
	</div>
	</div>
)
}

export default ProductList
