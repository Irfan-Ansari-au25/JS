

// Create a variable for the API endpoint. In this example, we're accessing Xano's API
let xanoUrl = new URL('https://x715-fe9c-6426.n7.xano.io/api:xrK0o8q4/');

// Since we are filtering by multiple categories, we create an empty array (or group) of categories to filter. This 
// will be based back to Xano below. If you were doing a single category, you would only need an integer. Because we 
// Want a group of categories, we want the group. A way to keep track of it.
let categoryArray = [];


// Define a function (set of operations) to get restaurant information.
// This will use the GET request on the URL endpoint
function getRestaurants() {

	// Create a request variable and assign a new XMLHttpRequest object to it.
	// XMLHttpRequest is the standard way you access an API in plain Javascript.
	let request = new XMLHttpRequest();

	// Define a function (set of operations) to get restaurant information.
	// Creates a variable that will take the URL from above and makes sure it displays as a string. 
	// We then add the word 'restaurant" so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/restaurant
	let url = xanoUrl.toString() + 'restaurant';

	// In order for Xano to filter on the categories, we have to package it up in a way for Xano to understand.
	// This goes through the Categories and passes the right url parameters back to Xano.
	if (categoryArray.length) {
		let filterCategoryParams = '?';
		for (let category of categoryArray) {
			filterCategoryParams = filterCategoryParams + 'category_id[]=' + category + '&'
		}
		url = url + filterCategoryParams;
	}

	// Remember the 'request' was defined above as the standard way to access an API in Javascript.
	// GET is the verb we're using to GET data from Xano
    request.open('GET', url, true)
    
    // When the 'request' or API request loads, do the following...
	request.onload = function () {

		// Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)
        
        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
		if (request.status >= 200 && request.status < 400) {

            // Map a variable called cardContainer to the Webflow element called "Cards-Container"
            const cardContainer = document.getElementById("Cards-Container")
            
            // Clear the information that currently exists. We do this because every time we select a new category, we want to
			// clear the cards that were there and create new ones that match the selected categories.
			// If this wasn't there, it would append the new call with the existing one still there. (duplicates)
            cardContainer.innerHTML = '';
            // let oldElements = document.getElementsByClassName('restaurant-card')
            // oldElements.forEach(element => {
            //     element.remove()
            // })

            // For each restaurant, create a div called card and style with the "Sample Card" class
            const style = document.getElementById('samplestyle')
            
            // This is called a For Loop. This goes through each object being passed back from the Xano API and does something.
            // Specifically, it says "For every element in Data (response from API), call each individual item restaurant"
            data.forEach(restaurant => {

                // Copy the card and it's style
                const card = style.cloneNode(true)
                card.classList.add('restaurant-card')
                card.setAttribute('id', '');
                card.style.display = 'block';

                // When a restuarant card is clicked, navigate to the item page by passing the restaurant id
                card.addEventListener('click', function() {
                    document.location.href = "/item?id=" + restaurant.id;
                });

                // For each restaurant, Create an image and use the restaurant image coming from the API
                const img = card.getElementsByTagName('IMG')[0]
                img.src = restaurant.banner.url + '?tpl=big:box';

                // For each restaurant, create an h3 and set the text content to the restaurant's title
                const h3 = card.getElementsByTagName('H3')[0]
                h3.textContent = restaurant.name;

                // For each restaurant, create an paragraph and set the text content to the restaurant's description
                const p = card.getElementsByTagName('P')[0]
                p.textContent = `${restaurant.description.substring(0, 240)}` // Limit to 240 chars

                // Place the card into the div "Cards-Container" 

                cardContainer.appendChild(card);
            })
		}
    }
    
    // Send Restaurant request to API
	request.send();
}

// You'll notice the getCategories function is VERY similar to the getRestaurants function above.
// We'll run through basically the same procedure and do another API request to get a list of category names.

function getCategories() {

    // Perform an API request to get Categories from the Xano API
    let CategoryRequest = new XMLHttpRequest()

    // Use the GET Verb and instead of using 'restaurant' like we did above, we'll use category.
    // so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/category
    CategoryRequest.open('GET', xanoUrl.toString() + 'category', true);
    
    // When the 'request' or API request loads, do the following...
	CategoryRequest.onload = function () {

		// Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)
        
        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
		if (CategoryRequest.status >= 200 && CategoryRequest.status < 400) {

            // This loop goes through each object being passed back from the Xano Category API and creates an element called
            // category. 
			data.forEach(category => {
                
				// Instead of creating a DIV like we did in restaurant, we'll create a list item or 'li'
				// For each category, create a list element and style with the "Sample Category" class
                const item = document.createElement('li')
                item.setAttribute('class', 'sample-category');

                // For each category, Set an item an ID so we can manipulate it.
				item.setAttribute('id', 'category-' + category.id);
				
				// We clear any previous category that exists so we can generate new ones.
				item.innerText = category.name;


				item.addEventListener("click", function (event) {
					// When you click on any of the categories, you'll get the category item that is clicked as an id called
					// category-(category id number). We want to take JUST the ID of the clicked category. Apply the selected
					// class and remove it from the the All categories button
					let id = parseInt(event.target.id.split('-')[1]);
					if (categoryArray.includes(id)) {
						categoryArray.splice(categoryArray.indexOf(id), 1);
						event.target.classList.remove('selected');
					} else {
						categoryArray.push(id);
						document.getElementById("category-all").classList.remove('selected');
						event.target.classList.add('selected');
					}
					// With all of this set, we get the reaturants again with the categoryArray populated correctly
					getRestaurants();
				});
				// We append the categories to the ID category container
				document.getElementById("Category-Container").appendChild(item);
			});
		}
	}
	// Send Category request to API
	CategoryRequest.send();
}


// One more function. We do specifically use this function to clear the Category Array and 
// Get ALL the restaurants clearing any category that might be selected.
function ResetCategoryFilters() {
	categoryArray = [];
	const categoryFilters = document.getElementsByClassName("sample-category");
	for (let category of categoryFilters) {
		category.classList.remove('selected');
	}
    getRestaurants();
}


// This fires all of the defined functions when the document is "ready" or loaded
(function () {
	const all = document.getElementById("category-all")
	all.addEventListener("click", function (event) {
		ResetCategoryFilters();
		// Adds the selected back on that got reset by ResetCategoryFilters
		document.getElementById("category-all").classList.add('selected');
	});
	getCategories();
	getRestaurants();
})();
