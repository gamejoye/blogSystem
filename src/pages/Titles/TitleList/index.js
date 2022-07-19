import React from "react";

class TitleList extends React.Component {
    render() {
        const titles = this.props.titles.map((title,index) => {
            return (
                <div key={index}>
                    {title}
                </div>
            )
        })
        return(
            <div>
                {titles}
            </div>
        )
    }
}

export default TitleList;