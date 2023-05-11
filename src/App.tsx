import { Route, Routes } from "react-router-dom";
import DestinationPage from "./components/destinationPage";
import Home from "./components/home";
import Testing from "./components/testing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/destination/:destinationId" element={<DestinationPage/>} />

      <Route path="/testing" element={<Testing />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
