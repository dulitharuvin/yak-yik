/**
 * Created by Dulitha RD on 3/12/2017.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'

class App extends Component {

    render() {
        return (
            <div>
                YakYik
                <Home />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))