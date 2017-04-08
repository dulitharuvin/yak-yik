import React, { Component } from "react";

class CreateComment extends Component {
    constructor() {
        super()
        this.state = {
            comment: {
                body: "",
                username: ""
            }
        }
    }

    updateComment(event) {
        // console.log('updateUsername: ' + event.target.value)
        //this.state.comment['username'] = event.target.value //WRONG! with react, never mutate the 'state'
        console.log('updateComment: ' + event.target.id + '==' + event.target.value)
        let updateComment = Object.assign({}, this.state.comment)
        updateComment[event.target.id] = event.target.value
        this.setState({
            comment: updateComment
        })
    }

    submitComment(event) {
        console.log('submitComment: ' + JSON.stringify(this.state.comment))
        this.props.onCreate(this.state.comment)
    }

    render() {
        return (
            <div>
                <input onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text"
                    placeholder="Username" /><br />
                <input onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text"
                    placeholder="Comment" /><br />
                <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
            </div>
        )
    }
}

export default CreateComment