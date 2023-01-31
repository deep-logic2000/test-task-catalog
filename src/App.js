import React from "react";
import AppRoutes from "./Routes/Routes";

import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}
