//ProductPage.js

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";
import {API_URL} from "../config/constants"
import { Button, message } from "antd";

const ProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProuct] = useState(null);
	const getProduct=() => {
		axios
		.get(`${API_URL}/products/${id}`)
		.then(function (result) {
			setProuct(result.data.product);
			console.log(result);
		})
		.catch(function (error) {
			console.error(error);
		});
}
	useEffect(() => {
		getProduct();
	}, []);
	if (product === null) {
		return <h1>상품정보를 받고 있습니다...</h1>;
	}

	const onClickPurchase=()=>{
		axios
		.post(`${API_URL}/purchase/${id}`)
		.then((result) => {
			message.info("결제가 완료되었습니다.")
			getProduct();
		})
		.catch((error) => {
			console.log(error)
		})
	}
	return (
		<div>
			<button onClick={() => navigate(-1)} id="back-btn">이전화면</button>
			<div id="image-box">
				<img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
			</div>
			<div id="profile-box">
				<img src="/images/icons/avatar.png" alt={product.seller} />
				<span className="product-seller">{product.seller}</span>
			</div>
			<div id="contents-box">
				<div id="name">{product.name}</div>
				<div id="price">{product.price}원</div>
				<div id="createAt">2022.01.15</div>
				<Button size="large" type="primary" danger={true} className="payment" onClick={onClickPurchase}>즉시 결제하기</Button>
				<pre id="description">{product.description}</pre>
			</div>
		</div>
	);
};
export default ProductPage;