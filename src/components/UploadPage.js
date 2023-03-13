import React from "react";
import "./UploadPage.css";
import { Button, Checkbox, Form, Input, Upload, Divider, InputNumber, } from 'antd';
// ConfigProvider : 환경설정하는 저장소
import { LockOutlined, UserOutlined } from "@ant-design/icons";


const {TextArea} = Input;

const UploadPage = ()=>{

    const onFinish=(val) => {
        console.log(val)
    }


    return(

    <div id="upload-container">
        <Form name="uploadForm" onFinish={onFinish}>
            <Form.Item name="upload">
                <div id="upload-img">
                    <img src="/images/icons/camera.png" alt=""/>
                    <span>이미지를 업로드 해주세요</span>
                </div>
            </Form.Item>
            <Divider/>{/* Divider : 구분선 생성 */}
            <Form.Item label={<span className="upload-label">상품명</span>} 
            name="product-name" rules={[{required:true, message:"상품명은 필수 입력사항입니다." }]}>
                <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large"/>
            </Form.Item>
            <Divider/>
            <Form.Item label={<span className="upload-price">판매가</span>} 
            name="product-price" rules={[{required:true, message:"판매가는 필수 입력사항입니다." }]}>
                <InputNumber className ="upload-price" min={1} defaultValue={0}/>
            </Form.Item>
            <Divider/>
            <Form.Item label={<div className="upload-label">상품설명</div>} 
            name="product-description" rules={[{required:true, message:"상품설명은 필수 입력사항입니다." }]}>
                {/* <Input.TextArea/> 해당 방식으로도 가능, 아래방식으로도 가능*/}
                <TextArea size="large"
                id="product-description"
                showCount maxLength={300}
                placeholder="상품설명을 작성해주세요"
                />{/* const {TextArea} = Input; 이렇게도 사용가능 */}
            </Form.Item>
            <Form.Item>
                <Button id="submit-button" htmlType="submit">상품등록하기</Button>
            </Form.Item>

            
        </Form>
    </div>
    )
}
export default UploadPage;