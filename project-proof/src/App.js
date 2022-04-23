import SignIn from './component/signin/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './component/signup/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
