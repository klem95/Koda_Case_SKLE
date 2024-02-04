import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import UserAdmin from './pages/UserAdmin';
import Home from './pages/Home';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="brugerAdmin" element={<UserAdmin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;