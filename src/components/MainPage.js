import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./MainPage.css";
import axios from "axios";



const MainPage = ()=>{
    const [products, setProducts] = useState([0]);
    
    useEffect(() => {
        const url = "https://dc7726eb-ed09-44d9-9ce5-697822933d54.mock.pstmn.io/products/"
        axios 
        .get(url)
        .then((result) => {
            const products= result.data.products;
            setProducts(products);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);



    return(
    <>
        <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.png" alt=""/>
            </div>
            <h1>Products</h1>
            <div id="product-list">
                {products.map((product,idx) => {
                return(
                <div className="product-card" key={idx}> 
                {/* key는 react 에서 식별할 수 있는 값으로 고유값->태그의 일련번호(html의 id) */}
                {/* idx가 필요한데 link로 위에까지 감싸면 idx 값을 사용할 수가 없어서 card 안으로 link 감쌈  */}
                    <Link className="product-link" to={`./productPage/${product.id}`}> {/* ${idx} => ${product.id }포스트맨에 id 값, 경로 description설계완료해서 바꿔줌 */} 
                        {/* to={"./products"}=postman의 database 경로  */}
                        <div>
                            <img src={product.imageUrl} className="product-img" alt={product.imgalt}/>
                        </div>
                        <div className="product-contents">
                            <span className="product-name">{product.name}</span>
                            <span className="product-price">{product.price}</span>
                            <span className="product-seller">
                                <img src="images/icons/avatar.png" className="product-avatar" alt={product.selleralt}/>
                                <span>{product.seller}</span>
                            </span>
                        </div>
                    </Link>
            </div>
                )
                })}
            </div>
        </div>
    </>
    );
};
export default MainPage;