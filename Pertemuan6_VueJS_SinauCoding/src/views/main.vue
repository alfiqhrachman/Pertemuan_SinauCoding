<script setup>

</script>

<template>
    <div class="container">
        <div class="left-side">
            <div class="content">
                <h1>Welcome to Twitter</h1>
                <p>Happening Now, Join Twitter Today</p>
                <img src="/src/assets/Ilustrator.svg" alt="Illustration" class="illustration">
                <h6>© 2022 Twitter, Inc</h6>
            </div>
        </div>
        <div class="right-side">
            <div class="login-box">
                <div class="login-header">
                    <img src="/src/assets/Logo Twitter.svg" alt="Twitter Logo" class="twitter-logo">
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
                <h2>Log in to Twitter</h2>
                <form>
                    <p>Enter Twitter Account</p>
                    <input type="text" placeholder="Phone, email or username">
                    <input type="password" placeholder="Password">
                    <a href="#" class="forgot-password">Forgot password ?</a>
                    <button type="submit">Sign In</button>
                </form>
                <div class="alternative-login">
                    <p>or</p>
                    <button class="google-login">
                        <img src="/src/assets/Logo Google.svg" alt="Google">Sign in with Google
                    </button>
                    <button class="apple-login">
                        <img src="/src/assets/Logo Apple.svg" alt="Apple">Sign in with Apple
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e6ecf0;
}

.container {
    display: flex;
    width: 100%;
    height: 100%; 
}

.left-side {
    background-color:  #1E9CF1 ;
    color: white;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    position: relative;
}

.left-side .content {
    position: absolute;
    top: 60px;
    bottom: 20px;
}

.left-side h1 {
    font-size: 56px;
    margin-bottom: 10px;
}

.left-side p {
    font-size: 24px;
    font-weight: 500;
}

.left-side h6 {
    font-size: 18px;
    font-weight: 400;
}

.left-side .illustration {
    width: 500px; 
    height: 500px;
}

.right-side {
    background-color: white;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-box {
    width: 70%;
    max-width: 700px;
}

.login-header {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.twitter-logo {
    width: 50px;
    height: 50px;
}

.login-header p {
    font-size: 16px;
    font-weight: 500;
}

.login-header a {
    color:  #1E9CF1 ;
    text-decoration: none;
    font-weight: bold;
}

h2 {
    padding-top: 30px;
    margin-bottom: 5px;
    font-size: 46px;
}

form {
    display: flex;
    flex-direction: column;
}

form p {
    font-size: 25px;
    font-weight: 600;
    color: #999;
}

form input {
    height: 60px;
    padding: 10px;
    margin-bottom: 5px;
    border: 0px;
    border-radius: 6px;
    font-size: 7px;
    background-color: rgb(233, 233, 233) ;
}

form .forgot-password {
    align-self: flex-end;
    color: black;
    text-decoration: none;
    font-size: 8px;
    font-weight: 500;
    margin-bottom: 5px;
}

form button {
    height: 30px;
    background-color:  #1E9CF1 ;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 7px;
    font-weight: 0;
}

.alternative-login {
    text-align: center;
}

.alternative-login p {
    grid-template-columns: 1fr 1fr;
    margin: 10px 0;
    font-size: 8px;
    font-weight: 500;
    color: black;
}

.google-login, .apple-login {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    font-size: 7px;
    font-weight: 100;
}

.google-login {
    width: 50%;
    height: 25px;
    background-color: white;
    color: black;
}

.apple-login {
    width: 50%;
    height: 25px;
    justify-content: left;
    background-color: black;
    color: white;
    float: right;
}

.google-login img, .apple-login img{
    width: 20px;
    height: 10px;
}

</style>
