import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";


const ProductPage = ()=>{
    let navigate = useNavigate();//useNavigate는 항상 변수에 담아야한다. 바로 못씀 
    const {id}=useParams(); //주소표시줄 데이터를 가져옴
    const [product, setProduct]=useState(null); //일단 빈값으로받음
    useEffect(() => {
        const url = `https://dc7726eb-ed09-44d9-9ce5-697822933d54.mock.pstmn.io/products/${id}`
        axios 
        .get(url)
        .then((result) => {
            const product= result.data;
            setProduct(product);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);
        if(product==null){
            return<h1>상품정보를 받고 있습니다.</h1>//return은 호출지점으로 돌려보내는역할도함(다시 useState 로 올라간다.-> 이후 데이터를 받아왔기때문에(비동기 useeffect )if문을 넘기고 아래 return 문을 반환한다.)
        }
    return(
    <>
        <button onClick ={() => {navigate(-1)}} id ="back-btn">뒤로 가기</button>
        <div id = "image-box"><img src={`/${product.imageUrl}`} alt={product.name}></img></div>
        {/* img src의 / 는 root의 의미임 상위의 루트를 쭉 읽어온다. (웹팩에 설정되어있음) */}
        <div id="profile-box">
            <img src="/images/icons/avatar.png" alt={product.seller}/>
            <span className="product-seller">{product.seller}</span>
        </div>
        <div className="content-box">
            <div id="name">{product.name}</div>
            <div id="price">{product.price}</div>
            <div id="createAt">2023.03.10</div>
            <div id="description">{product.description}</div>
        </div>
        <button onClick ={() => {navigate("/")}}>홈으로 가기</button>
    </>

    )
}
export default ProductPage;