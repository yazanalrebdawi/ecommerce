import React from "react";

import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
