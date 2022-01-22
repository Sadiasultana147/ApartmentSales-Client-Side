
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import AddApartment from './Components/AddApartment/AddApartment';
import Header from './Components/Header/Header';
import Purchase from './Components/Purchase/Purchase'
import MoreProjects from './Components/MoreProjects/MoreProjects';
import MyPurchases from './Components/MyParchases/MyPurchases';
import ManageAllPurchases from './Components/ManageAllPurchases/ManageAllPurchases'

import Pay from './Components/Pay/Pay';
import Review from './Components/ReView/Review';
import DashBoard from './Components/DashBoard/DashBoard';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageServices from './Components/ManageServices/ManageServices';
import About from './Components/About/About';

import Footer from './Components/Footer/Footer'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import NotFound from './Components/NotFound/NotFound'





function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            {/* General Route Start */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/explore">
              <MoreProjects></MoreProjects>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            {/* General Route End */}
            {/*........ AdminDashBoard start............. */}

            {/* <Route path="/addapartment">
              <AddApartment></AddApartment>
            </Route>

           
            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/allpurchases">
              <ManageAllPurchases></ManageAllPurchases>
            </Route>
           */}

            {/*........ AdminDashBoard End.......... */}


            {/* .........UserDashBoard.............. */}

            <PrivateRoute path="/mypurchase">
              <MyPurchases></MyPurchases>
            </PrivateRoute>


            <PrivateRoute path="/pay">
              <Pay></Pay>

            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>

            </PrivateRoute>

            {/* .........UserDashBoard..............  End*/}

            {/* Private Route */}

            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/purchases/:_id">
              <Purchase></Purchase>
            </PrivateRoute>
            {/* <Route path="/manageservices/:editid">
              <ManageServices></ManageServices>
            </Route> */}

            {/* PrivateRoute END */}

            {/* Auth-Route */}
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            {/* Auth-Route END */}



            <Route to path="*" >
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
