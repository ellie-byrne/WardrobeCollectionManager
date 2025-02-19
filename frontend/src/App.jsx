import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import { About, Contact, CustomerReviews, Projects, Home, AllItems, Tops, Bottoms, Shoes} from './Sections';
import ItemDetail from './components/ItemDetail';

const App =() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/customer-reviews" element={<CustomerReviews />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/all-items" element={<AllItems />} />
                    <Route path="/all-items/:_id" element={<ItemDetail />} />
                    <Route path="/tops" element={<Tops/>} />
                    <Route path="/bottoms" element={<Bottoms/>} />
                    <Route path="/shoes" element={<Shoes/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
  
export default App;
