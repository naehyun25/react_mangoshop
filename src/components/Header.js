import React from "react";
import 'antd/dist/reset.css';
import { Button  } from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";

const Header = ()=>{
    let navigate = useNavigate();
    return(
    <>
        <div id="header">
            <div id="header-area">
                <Link to ="/">
                <img src="/images/icons/logo.png" alt=""/>
                </Link>
                <Button 
                size ="middle" type ='default' 
                onClick={()=>{navigate('/UploadPage')}} icon={<UploadOutlined />}>
                    상품업로드
                </Button>
            </div>
        </div>
    </>
    )};
export default Header;