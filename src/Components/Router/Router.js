import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardMain from "../Dashboard/DashboardMain/DashboardMain";

const Router = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardMain />}>
            {/* <Route path="/managesetup" element={<ManageSetup />} /> */}
          </Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Router;
