import React, {Component, Fragment} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage, LoginPage, NotFound, SigninPage, Header, Footer} from "../componetns";

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="container-fluid">
                        <div className="container">
                            <Header/>
                            <main>
                                <Switch>
                                    <Route path="/" exact component={HomePage}/>
                                    <Route path="/login" component={LoginPage}/>
                                    <Route path="/signup" component={SigninPage}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </main>
                            <Footer/>
                        </div>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default AppRouter