import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect ,Link} from "react-router-dom"


class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ login: true })
        }, 3000)
    }
    render() {
        const { login } = this.state;
        return (
            <BrowserRouter>
             <div>
                    <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute
                        login={login}
                        path="/dashboard"
                        component={Dashboard}
                    />
                        <Route exact path="/contact-us/:_id" component={Contact} />
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const Contact = (props) => {
    console.log(props);
    return (
        "Contact Page"
    )
}

const Navbar = () => {
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/contact-us/12345" >Contact Us</Link>
        </div>
    )
}


const PrivateRoute = ({ component: Component, login, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => login ?
                <Component {...props} /> :
                <Redirect to="/" />}
        />
    )
}


class Home extends Component {
    constructor() {
        super();
    }
    myFunc = () => {
        console.log(this)

    }
    render() {
        return (
            <div>
                <p>Home Page</p>
                <button onClick={() => this.props.history.push("/dashboard")} >
                    Click
            </button>
            </div>
        )
    }
}


const Dashboard = (props) => {
    return (
        <div>
            <p>Dashboard</p>
            <button onClick={() => props.history.push("/")} >
                Click
            </button>
        </div>
    )
}

export default MyRouter;
