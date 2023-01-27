//@ts-ignore
import Coin from "./screens/Coin";
import Coins from "./screens/Coins";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Chart from "./screens/Chart";
import { isDarkAtom } from "./atoms";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Coins />}></Route>
          <Route path="/:coinId/coin" element={<Coin />}>
            <Route path="/:coinId/coin/chart" element={<Chart />}></Route>
          </Route>
        </Routes>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </BrowserRouter>
  );
};
export default App;
