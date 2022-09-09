import ListNote from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DisplayNote from "./Components/DisplayNote/DisplayNote";

function App() {
    return (
        <>
            <Router>

                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<ListNote />} />
                    <Route exact path="/edit" element={<MainArea />} />
                    <Route exact path="/displayNote/:id" element={<DisplayNote />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
