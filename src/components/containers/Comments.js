/**
 * Created by Dulitha RD on 3/18/2017.
 */
import React, {Component} from "react";
import Comment from "../presentation/Comment";
import styles from "./styles";
import {APIManager} from "../../utils";

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            comment: {
                username: '',
                body: '',
                timestamp: ''
            },
            list: []
        }
    }

    componentDidMount() {
        APIManager.get('/api/comment', null, (err, response)=> {
            if (err) {
                alert('ERROR: ' + err)
                return
            }

            this.setState({
                list: response.results
            })
        })
    }

    submitComment() {
        console.log('submitComment' + JSON.stringify(this.state.comment))

        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)

        this.setState({         //setState() function also re-render the component but reloads only if there are any visual differences
            list: updatedList   // in the dom than before

        })
    }

    updateUsername(event) {
        // console.log('updateUsername: ' + event.target.value)
        //this.state.comment['username'] = event.target.value //WRONG! with react, never mutate the 'state'

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['username'] = event.target.value

        this.setState({
            comment: updatedComment
        })
    }

    updateBody(event) {
        // console.log('updateBody: ' + event.target.value)

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['body'] = event.target.value

        this.setState({
            comment: updatedComment
        })
    }

    updateTimeStamp(event) {
        // console.log('updateTimestamp: ' + event.target.value)

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['timestamp'] = event.target.value

        this.setState({
            comment: updatedComment
        })
    }

    render() {

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Comment currentComment={comment}/></li>
            )
        })
        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {commentList}
                    </ul>

                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text"
                           placeholder="Username"/><br />
                    <input onChange={this.updateBody.bind(this)} className="form-control" type="text"
                           placeholder="Comment"/><br />
                    <input onChange={this.updateTimeStamp.bind(this)} className="form-control" type="text"
                           placeholder="Time stamp"/><br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
    }
}

export default Comments