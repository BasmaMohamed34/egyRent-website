import "./sign.css";
const SignIn = ()=>{
    return (
        <div class="wrapper">
    <div class="sign-panels">
        <div class="login">
            <div class="title">
                <span>Sign In</span>
                <p>Welcome back, please login to your account. You can login with facebook, twitter or by your regular
                    user login.</p>
            </div>
            <div>
            <a href="https://facebook.com" className="btn-face"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                <a href="https://twitter.com" className="btn-twitter"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
    
            </div>
            <div class="or"><span>OR</span></div>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="checkbox" id="remember"/>
                <label for="remember">Keep me sign in</label>
                <a href="#" class="btn-signin">Sign In</a>
            </form>
        </div>
    </div>
</div>
    )
}
export default SignIn;