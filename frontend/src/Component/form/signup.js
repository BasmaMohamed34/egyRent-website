import "./sign.css";
const Signup = ()=>{
    return(
    <div className="wrapper">
    <div className="sign-panels">
        
        <div className="signup">
            <div className="title">
                <span>Sign Up</span>
                <p>Create a new account.</p>
            </div>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Email Address"/>
                <input type="number" placeholder="Phone Number"/>
                <input type="password" placeholder="Password"/>
                <select className="text-center">
                    <option selected disabled>signup as</option>
                    <option id="host">Host</option>
                    <option id="traveller">Traveller</option>
                </select>
                <a href="#" className="btn-signin btn-primary">Sign Up</a>
            </form>
        </div>
    </div>
</div>
    )
}
export default Signup;