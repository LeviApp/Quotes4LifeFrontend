import React, {Component} from 'react'
import Quote from './Quote'
import '../CSS/List.css'
import {BrowserRouter as Link} from 'react-router-dom';

class QuotesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

      }

    render() {
        let X;
        let sortedQuotes = this.props.quotes.sort( (x,y) => {
            let XTITLE = x.title.toLowerCase();
            let YTITLE = y.title.toLowerCase();
            if (XTITLE<YTITLE) {return -1;}
            if (XTITLE>YTITLE) {return 1;}
            else {return 0;}


        })
        return (
            
            <div className='quotesContainer'>
            <div className='gridList'>
            {sortedQuotes.map( jot => {
                let QUOTE = <Quote title={jot.title} key={jot.id} className={jot.id} text_body={jot.text_body} img_url={jot.img_url} jot={jot} />
 
                if (jot.title !== 'LOADING ...') {
                    X = <h2 onClick={()=> {this.props.deleteQuoteList(jot.id)}}>X</h2>
                    QUOTE = <Link key={`link-${jot.id}`} to={`/quote/${jot.id}`}>
                                <Quote hover={this.props.hover} deleteQuote={this.props.deleteQuote} title={jot.title} key={jot.id} className={jot.id} text_body={jot.text_body} img_url={jot.img_url} jot={jot} />
                            </Link>
                }

                return <div className='cont' id={jot.id} key={`cont-${jot.id}`}>
                            {X}
                            {QUOTE}
                        </div>
            }
            )
            }
            </div>
            </div>
        )
    }
}

export default QuotesList