// Kyle Wilson
// 1-15-15
// Week Two Homework Debugging





// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),         // The get element by Id will display the Id if it is found, in this case, the results
		searchInput = document.forms[0].search,                 // document.forms is referencing all the forms for the hmtl file
		currentSearch = ''
	;

	console.log("Begin search here!");							// print to console to make sure its getting this far in code
	
	// Validates search query
	var validate = function(query){   							// fixed the spelling and took out a = sign to declare the variable
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){   						// fixed error by adding two more == to make it actually compare the two items
			query = query.substring(1, query.length);   		// this puts a " " in the search field at the start by returning substring 1
		};
		while(query.charAt(query.length-1) === "") {   			// this is placing no space after the users input
			query = query.substring(0, query.length - 1);  		// the substring is working with the 0 place and the query length to adjust length of whitespace after search term
		};														// fixed error, added curly brace
		
		// Check search length, must have 3 characters
		if(query.length < 3){                              			// if the users input is less than three than print alert
			alert("Your search query is too small, try again.");    //print this alert to tell user to add more characters to search
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		
		search(query);  											// using the search term to collect and return the position of the function query
	};
	
	// Finds search matches
	var search = function(query) {     								// put a curly brace in here, fixed error

		// split the user's search query string into an array
		var queryArray = query.join(" ");   						// the join term will bring the users input into an array

		// array to store matched results from database.js
		var results = [];  											// the newly made array from above will be stored here

		// loop through each index of db array
		for (var i = 0, j = db.length; i < j; i++) {   						// this is looking for a match to the users input by going through the database.js file over and over again

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');      						// using the indexOf to tell when the video item ends on each line with the pipe key in the database file
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);  	// converting TitleEnd of the video to lowercase and save

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {  				// loop through the array of the users search we created above
				var qitem = queryArray[ii].tolowercase();  					//convert to lowercase and save

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);   						// indexing the video name and comparing any similar words or characters with the search
				if (compare !== -1) {   										// if the variable the compare is not -1
					results.push(db[i]); 									// push results of database
				}; 															// fixed error, added curly brace
			};  															// fixed error, added curly brace
		};  																// fixed error, added curly brace

		results.sort();  // sorting the array of potential matches
		
		// Check that matches were found, and run output functions
		if(results.length = 0){   											// if the results are zero
			noMatch();  													//then no matches
		}else{
			showMatches(results);  											// else show results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){  																		//this is only ran to the html file if there are no results
		var html = ''+
			'<p>No Results found.</p>'+  															// pushed to paragraph of html
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'  		// css style and lower message
		;
		resultsDIV.innerHTML = html;  																// going to html
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){   															// the function for potential search matches
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',  																// pushing this title to the paragraph of html page
			title, 																					// these are both holding spots for the results to organize themselves in
			url   																					// these are both holding spots for the results to organize themselves in
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){  													// loop through results to organize them in a specific way below
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');  													// the pipe determines where the video ends, to look for that
			title = results[i].subString(0, titleEnd);  											// this pulls the title of the video out by using the titleEnd pipe key
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  				//makes the url for the link
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';  								// makes the video name a link for the video url
		}
		resultsDIV.innerHTML = html; 																//THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validate(query);     																		// changed name to validate to correct error

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};   // fixed error, added curly brace

})();