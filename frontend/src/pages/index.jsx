import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Main from "./Main";
import Lobby from "./Lobby";
import Game from './Game';
import '../tailwind.output.css';
import '../assets/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Navigate to="lobby" />} />
            <Route path="lobby" element={<Lobby />} />
          </Route>
          <Route path="/game" element={<Game />} />
          <Route
            path="*"
            element={
                <p>There's nothing here!</p>
            }
          />
        </Routes>
    </Router>
  );
}

export default App;
