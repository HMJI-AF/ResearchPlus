import SignIn from './component/signin/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './component/signup/SignUp';
import Secret from './component/Auth/Secret';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/secret" element={<Secret/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
