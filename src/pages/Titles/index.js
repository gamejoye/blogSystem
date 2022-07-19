import React from "react";
import { getInstance } from "../../utils/apis/axiosConfig";
import TitleList from "./TitleList";
import { baseUrl } from "../../constant";


class Titles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: []
        }
    }
    componentDidMount() {
        const username = this.props.username;
        getInstance.get(baseUrl+'titles/byName',{
            params: {
                username:username
            }
        }).then(
            (res) => {
                this.setState({
                    titles:res.data
                })
            }
        );
    }
    render() {
        
        return(
            <TitleList titles={this.state.titles}></TitleList>
        )
    }
}

export default Titles;