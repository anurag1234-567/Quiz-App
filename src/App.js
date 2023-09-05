import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Quiz from './quiz';

function App(){
    return(
        <>
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
          </Routes>
         </BrowserRouter>
        </>
    );
}
export default App;