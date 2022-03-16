import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import TodoList from "./components/TodoList";






function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "12345"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError]=useState("");
  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        name: details.name,
        email: details.email
      });
      console.log("Logged in");
    }

   
   else {
    console.log("Details do not match!");
    setError("Tài khoản, mật khẩu không đúng!");
  }
  }
  const Logout = () => {
    setUser({name: "", email: ""});
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome"> 
          <h1>Welcome, <span>{user.name}</span></h1>
          <Router path="/todo" component={LoginForm}>

          </Router>
          <TodoList />
         
          <button onClick={Logout}>Logout</button>
        </div>
      ) :( <LoginForm Login={Login} error={error}/>)}
    </div>
  );
}

export default App;
