import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: JSON.parse(localStorage.getItem("currentUser"))
        }
    }
    render() {
        return (
            <div>
                Dashboard
            </div>
        );
    }
}

export default Dashboard;