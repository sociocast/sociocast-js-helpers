/*
	This Sociocast Helper Library requires the Sociocast Library has been installed 
	as well as jQuery. Please make sure to include the Sociocast Helper JS underneath
	those two libraries. 
*/

var sociocast.helper = {
	
	/*
		This function captures all click events and submits
		the entity observation to Sociocast. Keep in mind that
		often these events are loss when the AJAX call is
		cancelled by the new page navigation. Another way to do 
		this is to check on the target page whether there is a 
		document.referrer and then submit a click event. 
	*/
    setObserveAllClickTitles:  function (eventType) {
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
    	This function captures the Meta Tag values associated
    	with the attribute and attribute values (array). 
    */
    getMetaTags: function (metaAttribute, metaAttributeValuesArray) {
        // do something
        return null;
    },
    /*
    	This function captures a search on submit. All you need to do 
    	is pass in the ID or Class of the Form as a String. 
    */
    setObserveSearchSubmit: function (eventType, objectIdentifier) {
        // do something
    },
    /*
    	This function sends an entity observation to Sociocast when 
		the user dwells on a particular object on the page. 
		
		eventType - the event type 
		objectIdentifier - the identifier for the object for jQuery
		dwellTimeMillis - the minimum dwell time for which the event should be triggered
    */
    setObserveMouseDwellOnDOMObject: function (eventType, objectIdentifier, dwellTimeMillis) {
        // do something
    }  
}