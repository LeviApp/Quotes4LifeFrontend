import React, {Component} from 'react'
import '../CSS/Edit.css'
import {BrowserRouter as NavLink} from 'react-router-dom';

class EditQuote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes:[],
            tags:[],
            title: this.props.location.state.title,
            text_body: this.props.location.state.text_body,
            img_url: this.props.location.state.img_url
        }
        }



    render() {
        let Update;

        if (this.props.title === '' || this.props.text_body === '') {
            Update = 
            <div className='main-button'>
            <button disabled={true}>Update</button>
            </div>
        }

        else {
            Update =
            <NavLink activeClassName='selected' to={`/quote/${this.props.location.state.ID}`}>
            <button onClick={() => this.props.editQuote(this.props.location.state.ID)}>Update</button>
            </NavLink>
        }
        return (
            <div className='quotesContainer'>
            <h2 className='edith2'> Edit Quote </h2>
            <div className='quotesList'>
            <form>
                <input defaultValue={this.props.location.state.title} onChange={this.props.inputHandler} name='title' className='title' placeholder='Author' type='text'></input>
                <textarea defaultValue={this.props.location.state.text_body} onChange={this.props.inputHandler} name='text_body' rows="12" placeholder='Quote'></textarea>
                <input defaultValue={this.props.location.state.img_url} onChange={this.props.inputHandler} name='img_url' className='img_url' placeholder='Image URL' type='text'></input>

            </form>
            <div className='main-button'>
            {Update}
            </div>
  
            </div>
            </div>
        )
    }
}

export default EditQuote