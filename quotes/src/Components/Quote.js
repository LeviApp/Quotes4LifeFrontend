import React, {Component} from 'react'
import '../App.css'

import styled from 'styled-components'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

const Quoted = styled.div`
background: ${(props) => (props.url ? `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${props.url})` : 'white' )}; 
background-size: 100%;
background-repeat: no-repeat;
background-position-y: center;
`

const QuoteContainer = styled.div`
&:hover > .quoteStyle  {
    background: ${(props) => (props.url ? `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url(${props.url})` : 'white' )};
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: center;
    background-color: white;
}
`

const Quote = (props) => {
    return (
        <QuoteContainer className='quoteStyleC' url={props.img_url}>
        <Quoted className="quoteStyle" url={props.img_url}>
            <h3>{props.title}</h3>
            <p className='textList'>{props.text_body}</p>
        </Quoted>
        </QuoteContainer>
    )
}

export default Quote