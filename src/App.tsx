import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { CarList } from "./pages/CarList";
import { NotFound } from "./pages/NotFound";
import { EditCar } from "./pages/EditCar";

function App(): any {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car" element={<EditCar />} />
          <Route path="/car/:id" element={<EditCar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
