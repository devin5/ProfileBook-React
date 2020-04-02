import React from 'react';
import { Layout } from 'antd';
import "./styles/_footerReg.css";
const {Footer} = Layout

const PbFooter = () =>{
    return(
        <Layout>
            <Footer id ="footer" >Profilebook Copyright@2020</Footer>
        </Layout>
    )
}
export default PbFooter