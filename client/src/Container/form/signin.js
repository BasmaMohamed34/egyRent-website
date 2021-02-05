import "./sign.css";
const SignIn = ()=>{
    return (
        <div class="wrapper">
    <div class="sign-panels">
        <div class="login">
            <div class="title">
                <span>Sign In</span>
                <p>Welcome back, please login to your account.</p>
            </div>
           
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="checkbox" id="remember"/>
                <label for="remember">Keep me sign in</label>
                <a href="#" class="btn-signin btn-primary">Sign In</a>
            </form>
        </div>
    </div>
</div>
    )
}
export default SignIn;