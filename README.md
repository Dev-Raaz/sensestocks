# Design and Architecture
So this website follows Single Page Application architecture, here
we have two main pages.
* All Stocks Page
* Quotes Page
The project can be build and the dev server can be started using the
```npm run build```
It also has an optional command to just install and build the project
```npm run build2```
It has all the necessary commands to do so.

## All Stocks Page
The All Stocks page, requests data from the ```/instruments``` endpoint.

* It displays a table having three columns.

* Each row has a symbol, which is a
```<Link>``` that can be used to navigate to the __Quotes Page__.

## Quotes Page
The Quotes page, requests data from the
```/quotes``` page.

* It displays the list of quotes each with a timer, that states when that quotee expires.

* The quotes refresh, after the quote with the longest timer expires, the timer is based on the ( ```valid_till``` data field ). 

# Project Improvements 
Here are some further improvements that can be made to this project.

* The assets can be optimized i.e. by using ```.webp``` instead of ```.svg``` files.

* For the styling part we could replace the display grid, to make the UI more backward compatible.

* We could have used the stock names instead of symbols for the links to the Quotes Page,
as it would be more descriptive and increase on page SEO.



# Assignment Task Improvements

* The project would have been more fun with some more data to play with, I would have loved
to work with some chart data.

* If the instruments data was in json, we wouldn't have to use a third party
library to parse it since JavaScript supports JSON parsing by default.

