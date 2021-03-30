# Quotes4LifeFrontend

## Link to Project

https://quotes4life.netlify.app/

## Quotes API

- A server that will deliver quotes can be found [here](https://quotesdjango.herokuapp.com/quotes/):

- One thing to be aware of is that this server is a shared resource. Any quotes you enter will be viewable to everyone who connects to the server.

- A quote has this basic format:

```js
  {
    "title": "Quote Title",
    "text_body": "Quote Body",
    "img_url": "Image URL"
  }
```


### https://quotesdjango.herokuapp.com/quotes/

a `GET` request to this route will return a list of all the quotes.

### https://quotesdjango.herokuapp.com/quotes/id/

a `GET` request to this route (with "id" replaced by the quote ID) will return the quote with the specified ID.

### https://quotesdjango.herokuapp.com/quotes/

a `POST` request to this route with the title and text in the req.body will create a new quote.

### https://quotesdjango.herokuapp.com/quotes/id/

a `PATCH` request to this route with the title and text in the req body will edit the quote with the specified ID.

### https://quotesdjango.herokuapp.com/quotes/id/

a `DELETE` request to this route will delete the quote with the specified ID.
