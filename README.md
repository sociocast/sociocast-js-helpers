![Alt text](/images/logo.png)

# Sociocast JavaScript Helper Library 

The Sociocast JavaScript Helper Library provides general utilities for clients using the Sociocast JavaScript Library. In order to use library, you must have: 

* Installed [jQuery](http://www.jquery.com) 
* Installed and initialized the [Sociocast JavaScript Library](http://www.sociocast.com/dev-center/javascript-integration/)

This library should be downloaded and installed on your servers. 

## Usage
Make sure to replace the src below with your relative path to the Sociocast Javascript Helper Library on your servers:

    <script type="text/javascript" src="/sociocast.helper.js" />

## Methods

### Get Page Title
Th2 `getPageTitle` helper function grabs the current Title of the page. This allows you to quickly add the variable to event observation attributes. 

     var pageTitle = sociocast.helper.getPageTitle();

### Get Path
The `getPath` helper function grabs the current path of the page. This allows you to quickly add the variable to event observation attributes.  

    var pagePath = sociocast.helper.getPath();

### Observe All Passive Click Events
The `setObservePassiveClick` function allows you to track click events after the user navigates to the clicked page. This prevents the AJAX from being cancelled as is possible with the `setObserveAllClickTitles` function. 

    var attribs = {};			
    attribs.page_title = sociocast_helper.getPageTitle();
    attribs.path_name = sociocast_helper.getPath();
			
    sociocast_helper.setObservePassiveClick(entityID, "click", attribs);

### Observe All Active Click Events
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

