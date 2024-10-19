/*eslint-disable */

import React, {  Suspense } from 'react';
import { ClipLoader } from 'react-spinners'
import {BrowserRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom"

const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const CheckOut = React.lazy(() => import('./pages/CheckOut'));
const AllProducts = React.lazy(() => import('./pages/AllProducts'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
// import './App.css';


function App() {
  return (
        <BrowserRouter>
        <Suspense fallback={
        <div className="loader-container">
          <ClipLoader color={"#123abc"} loading={true} size={50} />
        </div>
        }>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path= "Contact" element={<Contact/>} />
              <Route path= "About" element={<About/>} />
              <Route path=":name" element={<ProductDetail/>} />
              <Route path="CheckOut" element={<CheckOut/>} />
              <Route path="AllProducts" element={<AllProducts/>} />
              <Route path= "/*" element={<NotFound/>} />
            </Route>
          </Routes>
        </Suspense>
        </BrowserRouter>
  )
}

export default App
