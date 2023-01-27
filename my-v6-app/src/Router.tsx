import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Coin from "./screens/Coin";
import Coins from "./screens/Coins";
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
