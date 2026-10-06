import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ImageRemove from "./pages/ImageRemove";
import VideoRemove from "./pages/VideoRemove";
import Projects from "./pages/Projects";

function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-[#050816] text-white">

        <Navbar />

        <div className="p-10">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/image-remove"
              element={<ImageRemove />}
            />

            <Route
              path="/video-remove"
              element={<VideoRemove />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  );
}

export default App;