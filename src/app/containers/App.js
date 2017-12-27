import React from "react";
import Filter from "../components/Filter";

export default class App extends React.Component {
    render() {
        const list = ["FootBall", "Cricket", "Hockey"];
        return (
            <div>
                <Filter data= {list}/>
                

            </div>
        )
    }
}