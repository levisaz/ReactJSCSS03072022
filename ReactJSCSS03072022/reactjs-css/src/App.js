import './App.css';
/* react router */
import { BrowserRouter ,Routes, Route } from "react-router-dom";

/* components */
import TopNav from './components/TopNav'
import Footer from './components/Footer'
/* pages */
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={
            <>
              <TopNav />
              <Footer />  
            </>
          }>

            <Route path="/" element={<Home />} />
            <Route path="saturday" element={<Page2/>} />
            <Route path="sunday" element={<Page3 />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
