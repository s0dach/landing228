import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import { AccumsPage } from "./AccumsPage";
import { AdminPage } from "./adminPage";
import { AutoLompage } from "./autoLompage";
import { Calculator } from "./Calculator";
import { ContactPage } from "./ContactPage";
import { ActiveContext } from "./context";
import { DemontajPage } from "./DemontajPage";
import { Lists } from "./Lists";
import { MetalPage } from "./MetalPage";
import { Price } from "./Price";
import { PricesPage } from "./PricesPage";

export const AppRouter = () => {
  const [active, setActive] = React.useState(false);
  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      <Routes>
        <Route path="/about" element={<Lists />} />
        <Route path="/price" element={<Price />} />
        <Route path="/chernyy-lom" element={<Price />} />
        <Route path="/demontaj" element={<DemontajPage />} />
        <Route path="/autolom" element={<AutoLompage />} />
        <Route path="/akkumulyatory" element={<AccumsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/cvetnoy-lom" element={<Price />} />
        <Route path="/metal" element={<MetalPage />} />
        <Route path="/adminpanel" element={<AdminPage />} />
        <Route path="/" element={<App />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ActiveContext.Provider>
  );
};
