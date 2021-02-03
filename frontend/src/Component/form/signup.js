import "./sign.css";
const Signup = ()=>{
    return(
    <div className="wrapper">
    <div className="sign-panels">
        
        <div className="signup">
            <div className="title">
                <span>Sign Up</span>
                <p>Create a new account. You can sign up with your facebook or twitter accunt. Or your regular user
                    login.</p>
            </div>
            <div>
                <a href="https://facebook.com" className="btn-face"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                <a href="https://twitter.com" className="btn-twitter"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
            </div>
            <div classname="or"><span>OR</span></div>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat Password"/>
                <a href="#" className="btn-signin">Sign Up</a>
            </form>
        </div>
    </div>
</div>
    )
}
export default Signup;