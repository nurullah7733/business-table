import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullscreenLoader from "./components/loaderComponents/fullScreenLoader";
import ProductListPage from "./pages/productListPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </div>
  );
}

export default App;
