# Sociocast JavaScript Helper Library 
*****

The Sociocast JavaScript Helper Library provides general utilities for clients using the Sociocast JavaScript Library. In order to use library, you must have: 

* Installed [jQuery](http://www.jquery.com)
* Installed and initialized the Sociocast JavaScript Library 

## Usage
Make sure to replace the src below with your relative path to the Sociocast Javascript Library:

    <script type="text/javascript" src="/sociocast.helper.js" />

## Methods
### Observe All Click Events
The `setObserveAllClickTitles` function allows you to send entity observations for all click events that occur on the page. 

### Get All Meta Tags
The `getMetaTags` gets all the Meta Tags on the page associated with a particualr set of attributes. 

### Observe Search Event
The `setObserveSearchSubmit` function alows you to send entity observation when a user runs a search. However, given that AJAX calls may be cancelled when the user navigates away from the page, we suggest that you add regular entity observe tracking to the search results page.  

### Observe MouseOver Dwell
The `setObserveMouseDwellOnDOMObject` function allows you to send an entity observe event when a user dwells on a DOM object for some period of time. This is useful for understanding the preferences of a user or what they have been reading, for instance. 

