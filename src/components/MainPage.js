import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import {Carousel} from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
dayjs.extend(relativeTime);

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const[banners, setBanners] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/products`;
    axios
    .get(url)
    .then((result) => {
      console.log(result);
      console.log(url)
      const products = result.data.products;
      setProducts(products);
    })
    .catch((error) => {
      console.log("error", error);
    });
}, []);
useEffect(() => {
  axios
  .get(`${API_URL}/banners`)
  .then((result) => {
    const banners = result.data.banners;
    setBanners(banners);
  })
  .catch((error) => {
    console.log("error", error);
  });
}, []);
  return (
    <>
      <div id="body">
        <Carousel autoplay >
          {banners.map((banner, index)=>{
            return(<>
              <Link to={banner.href} key={banner.id}>
                <div id="banner" key={banner.id}>
                  <img src={`${API_URL}/${banner.imageUrl}`} alt="" />
                </div>
              </Link>
            </>)
          })}
        </Carousel>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            console.log(product)
            return (
              <div className="product-card" key={product.id}>
                {product.soldout===1? 
                <div className="product-blur">sold-out</div>
                :
                null}
                
                   <Link className="product-link" to={`./productPage/${product.id}`} key={product.id}>
                  <div>
                    <img src={`${API_URL}/${product.imageUrl}`} className="product-img" alt={product.imgalt} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-footer">
                      <div className="product-seller">
                        <img src="/images/icons/avatar.png" alt="product-avatar" className="product-avatar" />
                        <span>{product.seller}</span>
                      </div>
                      <span className="product-date">상품등록일 {dayjs(product.createdAt).format("YYYY-MM-DD")}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MainPage;
