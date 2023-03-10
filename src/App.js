import {Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import UploadPage from './components/UploadPage';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/ProductPage/:id" element={<ProductPage/>}/>
        <Route path="/UploadPage" element={<UploadPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
