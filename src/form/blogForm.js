import React from 'react';

class BlogForm extends React.Component {

    handlerArticlenameOnChange(e) {
        this.props.handlerArticlenameOnChange(e.target.value);
    }

    handlerContentOnChange(e) {
        this.props.handlerContentOnChange(e.target.value);
    }

    handlerOrderedOnChange(e) {
        this.props.handlerOrderedOnChange(e.target.value);
    }

    render() {
        
        return(
            <div>
                <b>BlogName:</b><input  onChange={(e)=>this.handlerArticlenameOnChange(e)}></input><br/><br/>
                <b>Content:</b><textarea style={{height: 500,width:400}} onChange={(e)=>this.handlerContentOnChange(e)}></textarea><br/><br/>
                <b>ordered:</b><input type="number" onChange={(e)=>this.handlerOrderedOnChange(e)}></input><br/><>ps:(This ordered helps to order your blog)</><br/><br/>
                <button onClick={()=>this.props.handlerAdd()}>添加</button><br/>
                <br/>
                <p style={{color:'red'}}>{this.props.message}</p><br/>
            </div>
        );
    }
}

export default BlogForm