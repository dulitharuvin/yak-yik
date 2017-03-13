/**
 * Created by Dulitha RD on 3/13/2017.
 */
import React, {Component} from 'react'
import Zone from './Zone'

class Zones extends Component{
    render(){
        return (
            <div>
                <ol>
                    <li><Zone/></li>
                    <li><Zone/></li>
                    <li><Zone/></li>
                    <li><Zone/></li>
                </ol>
            </div>
        )
    }
}

export default Zones