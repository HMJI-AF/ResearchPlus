import SignIn from './component/signin/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './component/signup/SignUp';
import Secret from './component/Auth/Secret';
import Dashboard from './component/Dashboard/Dashboard';
import Verify from './component/pages/Verify';
import LandedPage from './component/pages/LandedPage';
import Logout from './component/Dashboard/components/Logout'
import Profile from './component/Dashboard/components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/verify/:token" element={<Verify/>}/>
      <Route path="/landedpage" element={<LandedPage/>}/>

      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/secret" element={<Secret/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Dashboard/Logout" exact element={<Logout/>}/>
      <Route path="/Dashboard/Profile" exact element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
