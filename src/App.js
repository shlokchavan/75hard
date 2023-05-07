import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checklist from "./pages/Checklist";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* element={<Layout />} */}
          <Route path="/">
            <Route index element={<Checklist />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
