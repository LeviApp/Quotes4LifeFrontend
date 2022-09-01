import React, { Component } from 'react';
import {BrowserRouter as Route,Redirect} from 'react-router-dom';
import './App.css';
import QuotesList from './Components/QuotesList'
import NewQuote from './Components/NewQuote'
import QuotesNav from './Components/QuotesNav'
import SingleQuote from './Components/SingleQuote'
import EditQuote from './Components/EditQuote'
import isImageUrl from 'is-image-url'
import axios from 'axios'

class App extends Component {
  _isM = false;
  constructor (props) {
    super(props);

    this.state = {
      quotes: [{title: 'LOADING ...', text_body: 'Quotes are loading ...', img_url: 'https://2.bp.blogspot.com/-eglvS715ISM/T2F2CH2DQ3I/AAAAAAAABFI/4X8pluMcxFg/s1600/Seamless+stone+texture+%25282%2529.jpg'}],
      title: '',
      text_body: '',
      img_url: '',
      hoveredID: '',
      allQuotes: true,
      newQuote: false,
      fullQuote: false,
      updateQuote: false,
      deleteQuote: false,
  }
  }

  
  componentDidMount() {
    this._isM = true;
      axios.get('https://quotes4life.up.railway.app/quotes/')
      .then(response => {this.setState({quotes: response.data});
      })
      .catch(err => console.log('There is a Quote Error'))
}

  componentWillUnmount() {
    this._isM = false;

  }

  deleteQuote = (id) => {
    axios.delete(`https://quotes4life.up.railway.app/quotes/${id}/`)
    .then(response => {
      if (this._isM === true){
        let quotes = this.state.quotes.filter( quote => quote.id !== Number(id))
        this.setState({quotes: quotes});
      };
    })
    .then ( response => this.setState({deleteQuote:false}))
    .catch(err => console.log(err))

    axios.get('https://quotes4life.up.railway.app/quotes/')
    .then(response => {this.setState({quotes: response.data});
    })
    .catch(err => console.log('There is a Quote Error'))
}

  deleteQuoteList = (id) => {
    let quote = document.getElementById(`${id}`);
    quote.classList.add("deleted")
    setTimeout(() => this.deleteQuote(id),400)
  }

  inputHandler = (event) => {
    let value=event.target.value;
    let property= event.target.name;
    this.setState({[property]: value})
    if (value !== '') {
      event.target.classList.remove('empty')
    }
    else {
      if (property !== 'img_url') {
        event.target.classList.add('empty')
      }
    }
}

  addQuote = (event) => {
  const title = this.state.title;
  const text_body = this.state.text_body;
  let img_url = this.state.img_url;
  if (isImageUrl(img_url) === false) {
    img_url = 'https://2.bp.blogspot.com/-eglvS715ISM/T2F2CH2DQ3I/AAAAAAAABFI/4X8pluMcxFg/s1600/Seamless+stone+texture+%25282%2529.jpg';
  }
 
  axios.post('https://quotes4life.up.railway.app/quotes/new', {title,text_body, img_url})
  .then( response => {
  axios.get('https://quotes4life.up.railway.app/quotes/')
  .then(response => {this.setState({quotes: response.data});
  })
  .catch(err => console.log('There is a Quote Error', err))
})
  }


  editQuote = (id) => {
    let quotesE = this.state.quotes.filter( quote => quote.id !== Number(id))
    const title = this.state.title;
    const text_body = this.state.text_body;
    let img_url = this.state.img_url;
    if (isImageUrl(img_url) === false) {
      img_url = 'https://2.bp.blogspot.com/-eglvS715ISM/T2F2CH2DQ3I/AAAAAAAABFI/4X8pluMcxFg/s1600/Seamless+stone+texture+%25282%2529.jpg';
    }

    axios.put(`https://quotes4life.up.railway.app/quotes/${id}/`, {title,text_body, img_url})
    .then( response => 
      {this.setState({quotes: [...quotesE, {id:id , title:title, text_body:text_body, img_url:img_url}]})
    })
    .catch(err => console.log(err))
  }

  deleteHandler= (event) => {
    this.setState({deleteQuote: !this.state.deleteQuote})
  }

  noHandler= (event) => {
    this.setState({deleteQuote:false})
  }

  resetHandler = (event) => {
    this.setState({title: '', text_body: '', img_url: ''})

  }

  

  render() {
    // let Modal = '';
    // if (this.state.deleteQuote === true) {Modal = <DeleteModal noHandler={this.noHandler} quotes={this.state.quotes}/>}
    // else { Modal = ''}

    return (
      <div className='Main'>
        <QuotesNav clickForAllHandler={this.clickForAllHandler} clickForNewHandler={this.clickForNewHandler} />
        <Route exact path="/" render={(props) =>  <Redirect to='/home' /> } />
        <Route exact path="/home" render={(props) =>  <QuotesList {...props} selectedHandler={this.selectedHandler} deleteQuoteList={this.deleteQuoteList} hoveredID={this.state.hoveredID} quotes={this.state.quotes} />} />
        <Route exact path="/new" render={(props) =>  <NewQuote {...props} resetHandler = {this.resetHandler}title={this.state.title} text_body={this.state.text_body} img_url={this.state.img_url} inputHandler={this.inputHandler} addQuote={this.addQuote} quotes={this.state.quotes} />} />
        <Route exact path="/quote/edit/:id" render={(props) =>  <EditQuote {...props} title={this.state.title} text_body={this.state.text_body} img_url={this.state.img_url} editQuote={this.editQuote} inputHandler={this.inputHandler} quotes={this.state.quotes} />} />
        <Route exact path="/quote/:id" render={(props) =>  <SingleQuote {...props} deleteQuote={this.deleteQuote} DEL={this.state.deleteQuote} noHandler={this.noHandler} this={this} deleteHandler={this.deleteHandler} />} />
      </div>
    );
  }
}

export default App;
