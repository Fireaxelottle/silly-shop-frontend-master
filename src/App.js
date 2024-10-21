import React, { lazy, Suspense , useEffect } from "react";
import "./App.css";


import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Search = lazy(() => import("./pages/Search"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Order = lazy(() => import("./pages/Order"));

// Admin imports
const DashBoard = lazy(() => import("./pages/admin/DashBoard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const LineChart = lazy(() => import("./pages/admin/charts/LineCharts"));
const PieChart = lazy(() => import("./pages/admin/charts/PieCharts"));
const BarChart = lazy(() => import("./pages/admin/charts/BarCharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));



function App() {


  useEffect(() => {
   async function getLatestProduct() {
     const res = await fetch("http://localhost:4000/api/v1/product/latest");
     const data = await res.json();
     console.log(data);
    } 

    getLatestProduct();
  }, []);


  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<Order />} />
             {/* Admin  */}
            <Route path="/admin/dashboard" element={<DashBoard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/chart/line" element={<LineChart />} />
            <Route path="/admin/chart/pie" element={<PieChart />} />
            <Route path="/admin/chart/bar" element={<BarChart />} />
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />
          </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
