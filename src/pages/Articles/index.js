import React from "react";
import { getRequestByUsername } from "../../utils/apis/axiosConfig";


class Articles extends React.Component {
    render() {
        const username = this.props.username;
        const articles = getRequestByUsername('url',username);
        return(
            <ArtList articles={articles}></ArtList>
        )
    }
}