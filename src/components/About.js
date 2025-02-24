import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="about">
            <h1>About Page</h1>
            <h2>This is an about page!</h2>
            <UserContext.Consumer>
                {({loggedInUser}) => <h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
            <User/>
        </div>) 
    }

}

export default About;