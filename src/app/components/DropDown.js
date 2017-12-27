import React from "react";
import {options} from "../constants/config"


export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue:"Japan"
        }
        this.getOptions = this.getOptions.bind(this);
    }

    getOptions() {
        
        let elmOptions = []; 

        for(let key in options){
           
            elmOptions.push(
                <option key={elmOptions.length} value={options[key]}>{options[key]} </option>
            )
        }
        return elmOptions;
    }

    updatedValue(opt){
        console.log("updated Target Value");
        console.log(opt.target.value);
        this.setState({
            selectValue:opt.target.value
        })
    }

    render() {

        return (
            <div>
                <select value = {this.state.selectValue} onChange={(opt)=> this.updatedValue(opt)}>
                    {this.getOptions()}
                </select>
            
            </div>
        )
    }
}