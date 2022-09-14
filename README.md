# Quotes4LifeFrontend

## Link to Project

https://quotes4life.netlify.app/

## Quotes API

- A server that will deliver quotes can be found [here](https://quotes-4-life.onrender.com/quotes/):

- One thing to be aware of is that this server is a shared resource. Any quotes you enter will be viewable to everyone who connects to the server.

- A quote has this basic format:

```js
  {
    "title": "Quote Title",
    "text_body": "Quote Body",
    "img_url": "Image URL"
  }
```


### https://quotes-4-life.onrender.com/quotes/

a `GET` request to this route will return a list of all the quotes.

### https://quotes-4-life.onrender.com/quotes/id/

a `GET` request to this route (with "id" replaced by the quote ID) will return the quote with the specified ID.

### https://quotes-4-life.onrender.com/quotes/new

a `POST` request to this route with the title and text in the req.body will create a new quote.

### https://quotes-4-life.onrender.com/quotes/id/

a `PUT` request to this route with the title and text in the req body will edit the quote with the specified ID.

### https://quotes-4-life.onrender.com/quotes/id/

a `DELETE` request to this route will delete the quote with the specified ID.
