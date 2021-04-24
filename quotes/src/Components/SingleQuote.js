import React, {Component} from 'react'
import '../App.css'
import axios from 'axios';
import DeleteModal from './DeleteModal'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

class SingleQuote extends Component {
    constructor(props) {
        super(props);
        this.state= {
            quote: [],
            deleteQuote: false,
            home:false,
        };
    }

    componentDidMount() {
        setTimeout(()=> {
            const ID = Number(this.props.match.params.id);
            axios.get(`https://quotesnodejs.herokuapp.com/quotes/${ID}/`)
            .then(response => {this.setState({quote: response.data});
            this.props.this.setState({title:this.state.quote.title, text_body: this.state.quote.text_body, img_url: this.state.quote.img_url})})
            .catch (err => console.log(err))
        }, 500)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.props.data) {
        const ID = Number(this.props.match.params.id);
        axios.get(`https://quotesnodejs.herokuapp.com/quotes/${ID}/`)
        .then(response => {this.setState({quote: response.data});
        this.props.this.setState({title:this.state.quote.title, text_body: this.state.quote.text_body, img_url: this.state.quote.img_url})})
        .catch (err => console.log(err))
        }
    }

    render(){
        let Modal = '';
        if (this.props.DEL === true) {Modal = <DeleteModal clickForAllHandler={this.props.clickForAllHandler} deleteQuote={this.props.deleteQuote}  id={Number(this.props.match.params.id)} noHandler={this.props.noHandler} quotes={this.state.quotes}/>}
        else { Modal = ''}
    return (
        <div className='singleContainer'>
        {Modal}
            <img src={this.state.quote.img_url} />
            <div className='mainCardInfo' >
            <div className='button'>
            <NavLink activeClassName='selected' to={{pathname: `/quote/edit/${this.props.match.params.id}`, state:{ID: Number(this.props.match.params.id), title: this.state.quote.title, text_body: this.state.quote.text_body, img_url: this.state.quote.img_url}}}>
            <h5>edit</h5>
            </NavLink>
                <h5 onClick={this.props.deleteHandler}>delete</h5>
            </div>
            <div className='singleQuote'>
            <h3 className='singleH'>{this.state.quote.title}</h3>
            <p className='fullText'>{this.state.quote.text_body}</p>
            </div>
            </div>
        </div>
    )
}
}

export default SingleQuote;