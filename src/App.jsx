import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Tour from "./pages/Tour";
import { CssBaseline } from "@mui/material";



const App = () => {

  return (
    <BrowserRouter>

      <CssBaseline enableColorScheme />

      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Tour />}/>
      </Routes>
    </BrowserRouter>
  );

// end of App component
}

export default App;
