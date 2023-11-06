import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sheets from './pages/Sheetjs/sheet';
import ModalPage from './pages/Modal/modalDialog';
import HomePage from './pages/Home/homePage';
import SheetsPage from './pages/Excelpage/exceldisplay';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/mysheet" element={<SheetsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
