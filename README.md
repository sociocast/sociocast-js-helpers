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
The `setObserveAllClickTitles` function allows you to send entity observations for all click events that occur on the page. For example to send an entity observe event with event type click, use the following:

     sociocast.helper.setObserveAllClickTitles("click");

### Get All Meta Tags
The `getMetaTags` gets all the Meta Tags on the page associated with a particualr set of attributes. For instance, to send all Meta Tags with attribute `name` that are in an array use the following:

    var metaAttributeValuesArray = [
        'Title',
        'state',
        'category',
        'subCategory',
        'WT.cg_n',
        'WT.cg_s'
    ];
    
    var metaMap = sociocast.helper.getMetaTags("name", metaAttributeValuesArray);


### Observe Search Event
The `setObserveSearchSubmit` function alows you to send entity observation when a user runs a search. However, given that AJAX calls may be cancelled when the user navigates away from the page, we suggest that you add regular entity observe tracking to the search results page. For instance, to capture the search events for a search form with id `#searchForm` and inout text with id `#searchInput` you can use the following:
    
    sociocast.helper.setObserveSearchSubmit(entityID, 
        	eventType, 
    		"search-text", 
	    	"#searchForm", 
    		"#searchInput",
	    	additionalAttribs);

### Observe MouseOver Dwell
The `setObserveMouseDwellOnDOMObject` function allows you to send an entity observe event when a user dwells on a DOM object for some period of time. This is useful for understanding the preferences of a user or what they have been reading, for instance. As an example, lets say you want to track dwell time for greater than 2 seconds on a DIV with id `#importantDIV`, you can use the following:

    sociocast.helper.setObserveMouseDwellOnDOMObject(entityID,
        	"dwell", 
    		"#importantDIV", 
    		2000, 
    		additionalAttribs);

