import React, { Component } from 'react';
import { Input } from '../Input/Input';
import { validateForm } from "./helper";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 0, name: "admin", pass: "admin" },
                { id: 1, name: "irfan", pass: "17899" },
                { id: 2, name: "aamir", pass: "aamir" }
            ],
            isAuth: false,
            currentUser: null,
            errors: {
                hasError: false,
                errorsObj: {

                },
                serverError: ""
            },
            name: "",
            pass: ""
        }
       
    }
    onChange = (ev) => {
        const { errors, name, pass } = this.state;
        this.setState({
            [ev.target.name]: ev.target.value,
            errors: validateForm("each",
                { name, pass },
                ev.target.name, errors)
        })
    }
    // validate = () => {
    //     const { name, pass } = this.state;
    //     const errors = {
    //         hasError: false,
    //         errorsObj: {},
    //         serverError: ""
    //     }
    //     if (name.length < 3) {
    //         errors.hasError = true
    //         errors.errorsObj["name"] ?
    //             errors.errorsObj["name"].message += ``:
    //             errors.errorsObj["name"] = { message: ` Name Can't Be Less Than 4 Charachters \n` }
    //     }
    //     if (name.indexOf("a") !== 0) {
    //         errors.hasError = true
    //         errors.errorsObj["name"] ?
    //             errors.errorsObj["name"].message += ` Name Should Start With 'a' \n` :
    //             errors.errorsObj["name"] = { message: ` Name Should Start With 'a' \n ` }
    //     }
    //     return errors

    // }
    onSubmit = (ev) => {
        ev.preventDefault();
        const { users, errors, name, pass } = this.state;
        console.log(errors);


        const validate = validateForm("all", { name, pass });
        if (validate.hasError) {
            this.setState({
                errors: validate
            })
            return;
        }
        var currentUser = users.filter((user) => {
            return user.name === name && user.pass === pass
        })
        if (currentUser.length) {
            console.log("passed");

            localStorage.setItem("currentUser", JSON.stringify(currentUser[0]));
            this.props.history.push({ pathname: "/dashboard", state: { isAuth: true } })
        } else {
            errors.serverError = "Wrong Credentials"
            this.setState({ errors })
            return;
        }



    }
    render() {
        const { name, errors, pass } = this.state;

        return (
            <div>
                <div className="login-form-wrapper" >
                    <form onSubmit={(ev) => this.onSubmit(ev)}>
                        <h1>Login</h1>
                        {errors.serverError && <p>
                            <strong className="error" >{errors.serverError}</strong>
                        </p>
                        }
                        <Input
                            type="text"
                            value={name}
                            name="name"
                            id="name"
                            label="Username"
                            placeholder="Enter Your Name Here"
                            onChange={(ev) => this.onChange(ev)}
                            errors={errors}
                        />
                        <Input
                            type="password"
                            value={pass}
                            name="pass"
                            id="pass"
                            label="Password"
                            placeholder="Enter Your Password Here"
                            onChange={(ev) => this.onChange(ev)}
                            errors={errors}
                        />
                        <Input
                            type="submit"
                            value="Login"
                            name="my-login-btn"
                            id="my-btn"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;