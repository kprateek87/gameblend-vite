import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/home.jsx";
import Navbar from "./components/Navbar.jsx";
import Topbar from "./components/Topbar.jsx";
import Footer from "./components/Footer.jsx";
import Games from "./routes/games.jsx";
import News from "./routes/news.jsx";
import Videos from "./routes/videos.jsx";
import Reviews from "./routes/reviews.jsx";
import Staffpicks from "./routes/staffpicks.jsx";
import Deals from "./routes/deals.jsx";
import FAQ from "./routes/faq.jsx";
import Game from "./routes/games/gamepath.jsx";
import Platform from "./routes/platform/platform.jsx";
import StaffPicksPlatform from "./routes/staffpicks/StaffPicksPlatform.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Topbar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/:gamepath" element={<Game />} />
      <Route path="/games/platform/:platformName" element={<Platform />} />

      <Route path="/news" element={<News />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/staffpicks" element={<Staffpicks />} />
      <Route
        path="/staffpicks/:platformNameForStaff"
        element={<StaffPicksPlatform />}
      />
      <Route path="/deals" element={<Deals />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
