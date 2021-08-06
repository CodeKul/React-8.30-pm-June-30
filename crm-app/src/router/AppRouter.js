import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";


const Admin = lazy(() => 
import(/*webpackChunkName: 'AdminPage' */ "@/pages/Admin"));


const Dashboard = lazy(() => 
import(/*webpackChunkName: 'DashboardPage' */ "@/pages/Dashboard"));


const Customer = lazy(() => 
import(/*webpackChunkName: 'CustomerPage' */ "@/pages/Customer"));


const SelectCustomer = lazy(() => 
import(/*webpackChunkName: 'SelectCustomerPage' */ "@/pages/SelectCustomer"));


const Lead = lazy(() => 
import(/*webpackChunkName: 'LeadPage' */ "@/pages/Lead"));

const Product = lazy(() => 
import(/*webpackChunkName: 'ProductPage' */ "@/pages/Product"));


const Logout = lazy(() => 
import(/*webpackChunkName: 'LogoutPage' */ "@/pages/Logout"));


const NotFound= lazy(() => 
import(/*webpackChunkName: 'NotFoundPage' */ "@/pages/NotFound"));

export default function AppRouter() {

    const location = useLocation()
    return (
        <div>
            <Suspense fallback={<PageLoader/>}>

                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.pathname}>
                        <PrivateRoute path="/" component={Dashboard} exact/>
                        <PrivateRoute path="/customer" component={Customer} exact/>

                        <PrivateRoute path="/selectcustomer" component={SelectCustomer} exact/>

                          <PrivateRoute path="/lead" component={Lead} exact/>

                          <PrivateRoute path="/product" component={Product} exact/>

                          <PrivateRoute path="/admin" component={Admin} exact/>

                          <PrivateRoute path="/logout" component={Logout} exact/>

                          <PublicRoute path="/login" render={() => <Redirect to="/" />}/>


                          <Route 
                          path="*"
                          component={NotFound}
                          render={()=> <Redirect to="/notfound"/>}/>
                    </Switch>

                </AnimatePresence>

            </Suspense>
        </div>
    )
}
