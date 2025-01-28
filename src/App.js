import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo" />
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="./google.jpeg" alt="logo" />
          Sign In with Google
        </button>
        <button>
          <img src="./apple.png" alt="logo" />
          Sign In with Apple
        </button>
        <hr></hr>
      <span>Or</span>
      <form >
        <input type="text" placeholder="phone email or username"/>
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't have an account
         <a> Sign Up</a>
      </p>
      </div>
      
    </div>
  );
}

export default App;
