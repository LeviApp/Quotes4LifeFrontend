import React, {Component} from 'react'
import Quote from './Quote'
import '../CSS/New.css'
import axios from 'axios'
import {BrowserRouter as Router,Route, NavLink, Link} from 'react-router-dom';

class NewQuote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes:[],
            tags:[],
            title: '',
            text_body: '', 
            img_url: '', 
        }
        }

        componentDidMount() {
            this.props.resetHandler()
        }


    render() {
        let Save;

        if (this.props.title === '' || this.props.text_body === '') {
            Save = <button disabled={true}>Save</button>   
        }

        else {
            Save =
            <NavLink activeClassName='selected'  to='/home'>
            <button onClick={this.props.addQuote}>Save</button>
            </NavLink>
        }

        return (
            <div className='quotesContainer'>
            <h2 className='newh2'> Create New Quote </h2>
            <div className='quotesList'>
            <form>
                <input onChange={this.props.inputHandler} name='title' className='title empty' placeholder='Author' type='text'></input>
                <textarea onChange={this.props.inputHandler} name='text_body' rows="12" className='text_body empty' placeholder='Quote'></textarea>
                <input onChange={this.props.inputHandler} name='img_url' className='img_url' placeholder='Image URL' type='text'></input>
            </form>

            <div className='main-button'>
            {Save}   
            </div>            
            </div>
            </div>
        )
    }
}

export default NewQuote