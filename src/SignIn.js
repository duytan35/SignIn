import './SignIn.css';

function SignIn() {
  return (
    <div className="SignIn">
      <div className="label">
        <div className="label_img">
          <img className="label_img" src='./WinShop_Logo.png' alt="WinShop"/>
        </div>
        <p className="label_des">
          The great place for shopping!
        </p>
      </div>
      <form className="form">
        <input className="username" type="text" placeholder="User Name"/> 
        <input className="password" type="password" placeholder="Password"/> 
        <button className="btn btnSignIn" type="submit">Sign In</button>
        <a className="forgot_password" href="https://www.facebook.com/">Forgotten password?</a>
        <hr/>
        <button className="btn btnCreateNew">Create New Account</button>
      </form>
    </div>
  );
}

export default SignIn;
