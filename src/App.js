import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.components";
import LoginForm from "./components/loginform.components";
import RegisterForm from "./components/registerform.components";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home.components";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  </div>
);

export default App;
