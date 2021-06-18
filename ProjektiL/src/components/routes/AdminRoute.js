import React,{useEffect,useState} from 'react'
import {Route,Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'
import axios from "axios";

export const currentAdmin = async (authtoken) => {
    return await axios.post(
         `${process.env.REACT_APP_API}/current-admin`,
         {},
         {
             headers: {
                 authtoken,
             },
         }
     );
 };




const AdminRoute=({children,...rest})=>{
    const{user} = useSelector((state)=>({...state}));
    const [ok,setOk]=useState(false);

    useEffect(() => {
        if(user && user.token) {
            currentAdmin(user.token)
            .then((res)=>{
                console.log("CURRENT ADMIN RES",res);
                setOk(true);

 
            })
            .catch((err) =>{
                console.log("ADMIN ROUTE ERR",err);
                setOk(false);
            });


            
        }


    },[user]);
    return ok ? (
      <Route {...rest}/>
     ):( 
     <LoadingToRedirect/>
     );
};
export default AdminRoute;