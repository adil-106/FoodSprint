import React from "react";


class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "default",
                location: "default",

            }
        }

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/adil-106");
        const json = await data.json();
        this.setState({
            userInfo: json
        })    
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return(<div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
        </div>)
    }
}

export default User;