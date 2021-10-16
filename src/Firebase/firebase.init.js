import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAthentication;

// steps for authentication
/* 
---------------------------
Step-1: initial setup
1. firebase: creat project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method

---------------------------
Step-2:
1. create login component
2. create register component
3. create route for login and register

---------------------------
Step-3:
1. setup sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from firebase

---------------------------
Step-4:
1. create a auth context
2. create context provider
3. set context provider value
4. use auth provvider
5. create useAuth Hook

---------------------------
Step-5:
1. create private Route
2. set private route
*/
