import React, {Component} from 'react'
import '../App.css'
import {BrowserRouter as NavLink} from 'react-router-dom';
class DeleteModal extends Component {
    constructor() {
        super();
        this.state = {
            home: false,
        }
    }



    render() {
        return(
            <div className='deleteContainer'>
            <p> Are you sure you want to delete this? </p>
            <div className='deleteButtons'>
            <NavLink id='red-button' activeClassName='selected' to='/home' >
            <button className='red' onClick={()=> {this.props.deleteQuote(this.props.id)}} >Delete</button>
            </NavLink>
            <button id='green-button' onClick={this.props.noHandler}>No</button>
            </div>
            </div>
        )
    }
}

export default DeleteModal