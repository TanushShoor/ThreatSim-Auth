import { useEffect } from 'react';
import {auth, provider} from './firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';

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
    <>
      <h1>Hola, Hi, Namaste, Sat Sri Akal, Salam!</h1>
      <button onClick={handleLogin}>Sign in With Google</button>
    </>
  )
}

export default App;
