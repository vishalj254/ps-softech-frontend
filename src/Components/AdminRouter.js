import React from 'react'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Paperbase from './Paperbase'
import AdminLogin from './AdminLogin'
import Appbar from './UserView/Appbar'
import Home from './UserView/Theme/Home'
// import SignUp from './UserView/Theme/SignUp'
import Responsive from './UserView/Responsive'
import DisplayProgram from './UserView/Theme/DisplayPrograms'
import Placements from './UserView/Theme/modules/views/Placements'
import WindowScreenSize from './WindowScreenSize'
import ForgotPassword from './UserView/Theme/ForgotPassword'

export default function AdminRouter(props){
    return(
        <Router>
            <div>
            <div>
                <Route path='/AdminLogin' exact strict component={AdminLogin} history={props.history}/>
                <Route path='/Dashboard' exact strict component={Paperbase} history={props.history}/>
                <Route path='/' exact strict component={Home} history={props.history}/>
                <Route path='/display' exact strict component={DisplayProgram} history={props.history}/>
                <Route path='/Placement' exact strict component={Placements} history={props.history}/>
                <Route path='/qwerty' exact strict component={WindowScreenSize} history={props.history}/>
                <Route path='/Forgot' exact strict component={ForgotPassword} history={props.history}/>
            </div>
            </div>
        </Router>
    )
}