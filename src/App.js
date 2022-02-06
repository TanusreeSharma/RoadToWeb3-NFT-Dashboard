import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashbaord from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import NFTTest from "./pages/NFTTest";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/dashboard" element={<Dashbaord />} />
                    <Route path="/nfttest" element={<NFTTest />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
