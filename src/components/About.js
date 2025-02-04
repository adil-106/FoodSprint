import React from "react";
import User from "./User";

class About extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="about">
            <h1>About Page</h1>
            <h2>This is an about page!</h2>
            <User/>
        </div>) 
    }

}

export default About;