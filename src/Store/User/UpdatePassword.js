import React,{useEffect,useState} from 'react'
import {toast} from "react-toastify"
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { userAction } from './user-slice'
import { updatePassword } from './user-action'

const UpdatePassword = () => {
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const [passwordConfirm, setPasswordConfirm]=useState("");
    const [passwordCurrent, setPasswordCurrent]=useState("");
    const [password, setPassword]=useState("");
    const {errors,success}=useSelector((state)=>state.user);
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password !== passwordConfirm){
            toast.error("password does not match");
            return false;
        }
        else{
            dispatch(updatePassword({passwordConfirm, password, passwordCurrent}));
        }
    }
    useEffect(()=>{
        if(errors){
            toast.error(errors);
            dispatch(userAction.clearError());
        }
        else if(success){
            toast.success("Password has been updated")
            navigate("/profile");
            dispatch(userAction.getPasswordSuccess(false));
        }
    },[errors,dispatch,navigate , success])
  return (
    <>
    <div className="row wrapper">
        <form onSubmit={submitHandler}>
            <h1 className='password_tittle'>Upadate Password</h1>
            <div className='form_group'>
                <label htmlFor='passwordCurrent_field'>
                    Password Current
                </label>
                <input type='password' className='form-control' id='passwordCurrent_field' value={passwordCurrent} onChange={(e) => setPasswordCurrent(e.target.value)} />
            </div>
            <div className='form_group'>
                <label htmlFor='new_password_field'>
                    New Password
                </label>
                <input type='password' className='form-control' id='new_password_field' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </form>
    </div>
    </>
  )
}

export default UpdatePassword