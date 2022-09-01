import React, {Component} from 'react'
import {BrowserRouter as NavLink} from 'react-router-dom';

import '../CSS/Nav.css'
class QuotesNav extends Component {


    render(){
    return (
        <nav>
            <h1>Quotes 4 Life</h1>
            <div>
            <NavLink activeClassName='selected' to='/home'>
            <button className='view-quote' onClick={() => this.props.clickForAllHandler}></button>
            </NavLink>

            <NavLink activeClassName='selected' to='/new'>
            <button className='add-quote' onClick={this.props.clickForNewHandler}></button>
            </NavLink>
            </div>
        </nav>
    )
}
}

export default QuotesNav