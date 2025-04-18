import { useEffect } from 'react';
import {auth, provider} from './firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import './App.css'

function App() {
  useEffect(() => {
    getRedirectResult(auth)
      .then ((result) => {
        console.log("hi");
        if(result?.user){
          console.log("User Infor:", result.user);
          alert(`Welcome ${result.user.displayName}`);
        }
      })
      .catch((error) => {
        console.log("Redirect Error:", error);
      });
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <h1>Hey! Welcome</h1>
      <p class="text-gray-400 text-center mb-8">Sign in to continue your cybersecurity journey</p>
      <button onClick={handleLogin}>
        <img
          src="/assets/Google_Icons-09-512.webp"
          alt="Google icon"
        /> 
           Sign in With Google
        </button>
    </div>
  )
}

export default App;
