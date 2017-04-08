/**
 * Created by Dulitha RD on 3/18/2017.
 */
import React, { Component } from "react";
import { CreateComment, Comment } from "../presentation";
import styles from "./styles";
import { APIManager } from "../../utils";

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            // comment: {
            //     username: '',
            //     body: ''
            // },
            list: []
        }
    }

    componentDidMount() {
        APIManager.get('/api/comment', null, (err, response) => {
            if (err) {
                alert('ERROR: ' + err)
                return
            }

            this.setState({
                list: response.results
            })
        })
    }

    //setState() function also re-render the component but reloads only if there are any visual differences in the dom than before
    submitComment(comment) {
        console.log('submitComment: ' + JSON.stringify(comment))

        // let updatedComment = Object.assign({}, this.state.comment)
        let updatedComment = Object.assign({}, comment)
        APIManager.post('/api/comment', updatedComment, (err, response) => {
            if (err) {
                alert(err)
                return
            }

            console.log(JSON.stringify(response))
            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response.result)
            this.setState({
                list: updatedList
            })
        })
    }

    render() {

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Comment currentComment={comment} /></li>
            )
        })
        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {commentList}
                    </ul>
                    {/*We can pass along whole functions as component properties( bind it )*/}
                    <CreateComment onCreate={this.submitComment.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Comments