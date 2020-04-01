
import React, {useState} from "react"
import {connect} from 'react-redux'
import {signIn} from '../actions'
import { Layout, Input, Button } from 'antd'




   function Login({signIn}) {   

   const[creds, setCreds] = useState({})

   //handleChanges function to update the creds
    const handleChanges = (e) =>{
        setCreds({...creds,[e.target.name]:e.target.value})
    }


   //handleSubmit function to submit the form
    const handleSubmit = (e) => {
        console.log("I am creds",creds)
      e.preventDefault()
         signIn(creds)
    }

    return(
         <Layout>
             
         <form id="myForm" onSubmit = {handleSubmit}>
             <div id= "header">
                <div>
                  <h2 className="title"> Profilebook</h2>   
                </div>
                
                <div className = "input-parent">
                    <label className="label" htmlFor="Email">Email</label>
                    <Input id ="ant-input"
                    type = "email"
                    name = "User_Email"
                     placeholder = "Email"
                    value = {creds.Email}
                    onChange = {handleChanges}                 
                    />

                   <label className="label" htmlFor="Password">Password</label>
                    <Input id ="ant-input"
                    type = "password"
                    name = "User_Password"
                     placeholder = "Password"
                    value = {creds.Password}
                    onChange = {handleChanges}                 
                    />
                    <Button id="btn" type = 'primary' form="myForm" key="submit" htmlType="submit">Log In</Button>
                </div>    
             </div>
         </form>

         </Layout>
         ) 
}

    export default connect(null, {signIn})(Login)