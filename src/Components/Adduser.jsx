import{ FormGroup,FormControl,InputLabel,Input,Button,makeStyles} from "@material-ui/core"
import React, { useState } from "react";
import { addUser } from "../Service/api";
import {useHistory} from 'react-router-dom';
const useStyle= makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        fontWeight: '25px',
        '& > *':{
            marginTop: '20px'
        }
    }
}) 

const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUser =() =>{
    const [user,setUser] =useState(initialValues);
    const{name,username,email,phone} = user;
    const classes =useStyle();
    const history =useHistory();

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

  const addUserDetails =async()=>{
      await addUser(user);
      history.push('./all');
  }

     return(
         <FormGroup className={classes.container}>
             <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input onChange={(e)=>onValueChange(e) } name='name' value={name} />
             </FormControl>
             <FormControl>
                 <InputLabel>Username</InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} name='username' value={username}/>
             </FormControl>
             <FormControl>
                 <InputLabel>Email</InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
                 
             </FormControl>
             <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input onChange={(e)=>onValueChange(e)} name ='phone' value={phone}/>
             </FormControl>
             <Button variant ="contained" onClick={()=> addUserDetails()}>Add User</Button>
         </FormGroup>
     )
 } 
 export default AddUser;