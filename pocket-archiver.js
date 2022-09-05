// Node.js does not support the fetch() method. To run this program in Node.js, node-fetch is installed and a package.json file with a "module" type is provided.
import fetch from "node-fetch";

// Replace ${consumer_key} with your consumer key from your Pocket application.
const consumerKey = '${consumer_key}';

//Replace ${access_token} with your access token from your Pocket application.
const accessToken = '${access_token}';

//This variable stores the root of the API url for use in the following functions.
const pocketBaseUrl = 'https://getpocket.com/v3';

//The getIds function retrieves a list of all item IDs from Pocket.
const getIds = async () => {
    const retrieveEndpoint = '/get';
    const requestParams = `?consumer_key=${consumerKey}&access_token=${accessToken}`;
    const urlToFetch = `${pocketBaseUrl}${retrieveEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const ids = Object.keys(jsonResponse.list);
            return ids;
        }
    } catch(error) {
        console.log(error);
    }
}

const ids = await getIds();

//This section renders the list of IDs that we will archive in the required JSON format for the Pocket API.
let actionsArray = [];

for (let i = 0; i < ids.length; i++) {
    actionsArray.push({
        "action": "archive",
        "item_id": ids[i] 
    })
}

let jsonActionsArray = JSON.stringify(actionsArray);

//The archive function archives all items retrieved from Pocket. 
const archive = async () => {
    const modifyEndpoint = '/send';
    const requestParams = `?consumer_key=${consumerKey}&access_token=${accessToken}&actions=${jsonActionsArray}`;
    const urlToFetch = `${pocketBaseUrl}${modifyEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            console.log(response);
        }
    } catch(error) {
        console.log(error);
    }
}

await archive();
