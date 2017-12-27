import React from "react";
import GameList from "./GameList"

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gameList: props.data || [],
            filteredData:[]
        }
        this.filterResults = this.filterResults.bind(this);
    }
    changeName(newName) {
        this.setState({
            name: newName.target.value
        })
       
    }
    filterResults() {

        let result = this.state.gameList;
        let name = this.state.name;
        console.log(result);
        console.log(name);
        let filteredResult = result.filter((value) => {
            if (value == name) {
                return value;
            }
        })
        console.log(filteredResult);
        if (filteredResult) {
            this.setState({
                filteredData: filteredResult
            })
        }
    }
    
    render() {
        let outPut;
        let filData = this.state.filteredData;
        let playList = this.state.gameList;

        return (
            <div>
                <div>
                    <input type="text" value={this.state.name} onChange={(newName) => this.changeName(newName)} />
                </div>
                <div>
                    <button onClick={this.filterResults}>Filter Button</button>
                </div>
                <div>
                {filData.length > 0 ? filData:playList}
                </div>
            </div>
        )
    }
}

// Filter.propTypes = {
//     data : propTypes.list
// }