import React, {useState, useEffect} from "react";
import "./MainPage.css";
import axios from "axios";


const MainPage = ()=>{
    const [products, setProducts] = useState([0]);//반환값이 products 하위 [배열] -> 안의 {객체}
    
    useEffect(() => {
        //import 한 axios모듈을 사용해서 데이터 가져오기//똑같은데???
        const url = "https://dc7726eb-ed09-44d9-9ce5-697822933d54.mock.pstmn.io/products"
        axios // 비동기 + return 안먹히는데다가 리액트에서 값을바꿀때는 useState를 써야된다.
        .get(url)
        .then((result) => {
            const products= result.data.products; // 객체를 가져와야지요 ->products 밑에는 배열
            setProducts(products);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]); // 서버통신은 처음 렌더링될때만 하면 됨. //useEffect 안쓰면 콜백지옥빠짐.. 빠졌었음... 
    //console.log(products);// then 안의 products 는 그냥 밖으로 못나옴(내보내줘야함) 
    //여기서는 통신하기전 빈값의 products 임.
    console.log("나야", products);



    return(
    <>
        <div id="header">
            <div id="header-area">
                <img src="images/icons/logo.png" alt=""/>
            </div>
        </div>
        <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.png" alt=""/>
            </div>
            <h1>Products</h1>
            <div id="product-list">
                {products.map((product,idx) => {
                    //console.log(`product:${product.name} idx:${idx}`)
                return(
                <div className="product-card">
                <div>
                    <img src={product.imageUrl} className="product-img" alt=""/>
                </div>
                <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <span className="product-seller">
                        <img src="images/icons/avatar.png" className="product-avatar" alt=""/>
                        <span>{product.seller}</span>
                    </span>
                </div>
            </div>
                )
                })}
            </div>
        </div>
        <div id="footer">
            <a href="#">회사소개</a>
            <a href="#">이용약관</a>
            <a href="#">통신판매업신고번호:123-7890</a>
            <a href="#">사업자 등록번호:123-45-67890</a>
            <a href="#">전화번호:1234-5678</a>
        </div>
    </>
    );
};
export default MainPage;