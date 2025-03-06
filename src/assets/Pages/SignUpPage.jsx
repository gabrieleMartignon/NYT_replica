import HeadPage from '../Components/HeadPage/HeadPage'
import '/src/assets/Styles/SignUpPage.css'





function SignUpPage () {
    return (
        <>
        <HeadPage/>
        <h2>Sign up</h2>
        <form action="/Home" id='form'>
            <label>First Name</label>
            <input required type="text"/>
            <label>Last Name</label>
            <input required type="password"/>
            <label>Email</label>
            <input required type="email"/>
            <label>Password</label>
            <input required type="password"/>
            <input type="submit" value="Sign Up" />
            <div id='line'>
            <hr/>
            </div>
            <p>By continuing you agree to the <a href="/">Terms of Sales</a>, <a href="/">Terms of service</a>, and <a href="/">Privacy Policy</a></p>
        </form>
        </>
    )
}




export default SignUpPage