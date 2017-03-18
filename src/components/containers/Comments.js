/**
 * Created by Dulitha RD on 3/18/2017.
 */
import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from '../styles'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            list: [
                {body: 'comment 1', username: 'dtrump', timestamp: '10:30'},
                {body: 'comment 2', username: 'hclinton', timestamp: '10:45'},
                {body: 'comment 3', username: 'gjohnson', timestamp: '11:00'}
            ]
        }
    }

    render() {

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li><Comment currentComment={comment}/></li>
            )
        })
        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {commentList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Comments