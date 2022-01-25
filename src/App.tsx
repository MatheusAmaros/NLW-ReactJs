import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


import { AuthContextProvider } from  './context/AuthContext'
import { Room } from "./pages/Room";



function App() {
  
  
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/room/new" element={<NewRoom />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
     
  );
}

export default App;
 