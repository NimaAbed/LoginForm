import React , {useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


import styles from "./SignUp.module.css"
import validated from './validated';



const SignUp = () => {

    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        comfirmPassword:"",
        isAccepted:false,
    })

    const [message,setMessage]=useState({
        isSubmit:false,
        isShow:false,
    })

    const [errors,setErrors]=useState({})
    const [touch,setTouch]=useState({})

    useEffect(()=>{
        // console.log(validated(data))
        // console.log(!Boolean(Object.keys(validated(data)).length))
        setErrors(validated(data,"signup"))
        // console.log(errors)
    },[data])

    const changeHandler = (evt)=>{
        if(evt.target.name == "isAccepted"){
            setData({...data,[evt.target.name]:evt.target.checked})
        }else{
            setData({...data,[evt.target.name]:evt.target.value})
        }
        // console.log(data)
    }

    const foucsHandler=evt=>{
        if(evt.target.name !="isAccepted"){
            setTouch({...touch,[evt.target.name]:true})
        }
    }

    const submitHandler = (evt)=>{
        let isSubmit=false
        evt.preventDefault()
        if(!Boolean(Object.keys(validated(data)).length)){
            notify("Sign Is Succesfuly","succes")
            console.log("hale")
            setMessage({...message,isSubmit:true,isShow:true})
            // console.log(message)
            isSubmit=true
        }else{
            notify("Invalid Data")
            setMessage({...message,isSubmit:false,isShow:true,})
            console.log(message)
            isSubmit=false
        }

        if(Object.keys(errors)){
            setTouch({
                name:true,
                email:true,
                password:true,
                comfirmPassword:true,
                isAccepted:true
            })
        }


        setTimeout(()=>{
            setMessage({...message,isShow:false,isSubmit:isSubmit})
        },2000)
    }

    const notify = (text,type) => {
        if(type == "succes"){
            toast.success(text)
        }else{
            toast.error(text)
        }
    }

    return (
        <>
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.input}>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} onFocus={foucsHandler} className={(errors.name && touch.name) ? styles.uncomplited:styles.complited}></input>
                    {errors.name && touch.name && <p>{errors.name}</p>}
                </div>
                <div className={styles.input}>
                    <label>Email</label>
                    <input type='eamail' name='email' value={data.email} onChange={changeHandler} onFocus={foucsHandler} className={(errors.email && touch.email) ? styles.uncomplited:styles.complited}></input>
                    {errors.email && touch.email && <p>{errors.email}</p>}
                </div>
                <div className={styles.input}>
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} onChange={changeHandler} onFocus={foucsHandler} className={(errors.password && touch.password) ? styles.uncomplited:styles.complited}></input>
                    {errors.password && touch.password && <p>{errors.password}</p>}
                </div>
                <div className={styles.input}>
                    <label>Comfirm Password</label>
                    <input type='password' name='comfirmPassword' value={data.comfirmPassword} onChange={changeHandler} onFocus={foucsHandler} className={(errors.comfirmPassword && touch.comfirmPassword) ? styles.uncomplited:styles.complited}></input>
                    {errors.comfirmPassword && touch.comfirmPassword && <p>{errors.comfirmPassword}</p>}
                </div>
                <div className={styles.input}>
                    <label>Accepted our Roules</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={foucsHandler}></input>
                    {errors.isAccepted && touch.isAccepted && <p>{errors.isAccepted}</p>}
                </div>
                <div className={styles.input}>
                    <div className={styles.submit}>
                        <Link to="/login">Login</Link>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
            <ToastContainer />
        </>
    );
};

export default SignUp;