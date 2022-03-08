

import Form from './Pages/Form/Form';
import Listing from './Pages/Listing/Listing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/navabar/NavBar'
function App():JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Listing />} />
         <Route path="/form">
           <Route path=":movieId" element={<Form />} /> 
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
export default App
