import React from 'react';
import { Layout } from 'antd';

const {Footer} = Layout

const PbFooter = () =>{
    return(
        <Layout>
            <Footer id ="footer" style={{textAlign: 'center',color:"rgb(244, 244, 245)", background:"rgb(128, 169, 248)" }}>Profilebook Copyright@2020</Footer>
        </Layout>
    )
}
export default PbFooter