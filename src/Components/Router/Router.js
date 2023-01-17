import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain/DashboardMain';



const Router = () => {
   return (
      <Box>
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<DashboardMain />}>



         </Route>



         {/* <Route path="/login" element={<Login />}></Route> */}

         </Routes>
         
         
         </BrowserRouter>
      </Box>
   );
};

export default Router;