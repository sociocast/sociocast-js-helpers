/*
	This Sociocast Helper Library requires the Sociocast Library has been installed 
	as well as jQuery. Please make sure to include the Sociocast Helper JS underneath
	those two libraries. 
*/

var sociocast_helper = {
			
	/*
		Gets the current page title as a String. 
	*/
	getPageTitle: function () {
		return $("title").text();	
	},	
	/*
		Gets the current file path of the URL
	*/
	getPath : function() {
		return $(location).attr('pathname');
	},
	/*
		This function captures all click events and submits
		the entity observation to Sociocast. Keep in mind that
		often these events are loss when the AJAX call is
		cancelled by the new page navigation. Another way to do 
		this is to check on the target page whether there is a 
		document.referrer and then submit a click event. 
	*/
    setObserveAllClickTitles: function (entityID, eventType) {
        // Loop through each <a> tag
        $("a").each(function(){
			// Set the onClick function
			$(this).click(function(){
				var linkAttribs = {};
				var linkText = $(this).text();
				var linkTitle = $(this).html();			
				if(linkTitle != "") linkAttribs.link_text = linkText;
				if(linkTitle != "") linkAttribs.link_title = linkTitle;        
				if(linkTitle != "" | linkText != "") {
					// Send the entity observation to Sociocast
					sociocast.entity_observe(eventType, entityID, linkAttribs);
				}		
			});
		});
    },
    /*
    	As oppose to the function above, this function sends a click event on the
    	page in which it lands. This avoids the problem with AJAX calls being 
    	cancelled on navigation. 
    */
    setObservePassiveClick: function(entityID, eventType, additionalAttribs) {
    	if(document.referrer) { // Click occured
			// Send the entity observation to Sociocast
			var url = document.referrer; 
		   	var ref = url.match(/:\/\/(.[^/]+)/)[1];	
		   	if(additionalAttribs == null) additionalAttribs = {};
		   	additionalAttribs.source = ref;
			sociocast.entity_observe(eventType, entityID, additionalAttribs);    			
    	}
    },
    /*
    	This function captures the Meta Tag values associated
    	with the attribute and attribute values (array). This function
    	returns a JavaScript map. 
    */
    getMetaTags: function (metaAttribute, metaAttributeValuesArray) {
		var returnMap = {};
		$("meta").each(function(){
		    var metaName = jQuery(this).attr(metaAttribute);
		    var metaValue = jQuery(this).attr("content");
		    if($.inArray(metaName, metaAttributeValuesArray) > -1){
		        returnMap[metaName] = metaValue;  
	    	}
	    });        
        return returnMap;
    },
    /*
    	This function captures a search on submit. All you need to do 
    	is pass in the ID or Class of the Form as a String. 
    	
    	entityID - the entity ID
    	eventType - the event type you want to use (i.e. "search")
    	searchTextKey - the key for the search text you want to use (i.e. "search-text")
    	searchObjectIdentifier - the identifier for the search form
    	textObjectIdentifier - the identifier for the search input text
    	additionalAttribs - additional attributes you want to add to entity observation
    */
    setObserveSearchSubmit: function (entityID, 
    		eventType, 
    		searchTextKey, 
	    	searchObjectIdentifier, 
    		textObjectIdentifier,
	    	additionalAttribs) {
	    	
		var searchAttribs;
    	if(additionalAttribs != null) searchAttribs = additionalAttribs;
    	else searchAttribs = {};
		$(searchObjectIdentifier).click(function(){
			var searchText = $(textObjectIdentifier).val();
			searchAttribs[searchTextKey] = searchText;
			sociocast.entity_observe(eventType, entityID, searchAttribs);   
		});
    },
    /*
    	This function sends an entity observation to Sociocast when 
		the user dwells on a particular object on the page. 
		
		entityID - the entity ID 
		eventType - the event type 
		objectIdentifier - the identifier for the object for jQuery
		dwellTimeMillis - the minimum dwell time for which the event should be triggered
		additionalAttribs - additional attributes you want to add to entity observation
    */
    setObserveMouseDwellOnDOMObject: function (entityID,
    		eventType, 
    		objectIdentifier, 
    		dwellTimeMillis, 
    		additionalAttribs) {
        // do something
   		$(objectIdentifier).hover(
        	function() {
            	$(this).data("hoverStart", (new Date()).getTime());
	        }, 
    	    function() {
    	    	// Calculate hover time
    	    	var hoverAttribs;
    	    	if(additionalAttribs != null) hoverAttribs = additionalAttribs;
    	    	else hoverAttribs = {};
        	    var hoverTime = ((new Date()).getTime() - $(this).data("hoverStart"));
        	    hoverAttribs.hover_time = hoverTime;
				if(hoverTime >= dwellTimeMillis) {
					sociocast.entity_observe(eventType, entityID, hoverAttribs);   	
				}  
        	}
	    );        
    }  
}