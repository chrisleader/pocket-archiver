//Configure CONSUMER_KEY and ACCESS_TOKEN in the .env file. dotenv will import them here.
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env);

//Node.js does not support the fetch() method. To run this program in Node.js, node-fetch is imported and a package.json file is provided with "module" type configured.
import fetch from 'node-fetch';

//This sets the imported keys as variables.
const {CONSUMER_KEY, ACCESS_TOKEN} = process.env

//This variable stores the root of the API url for use in the following functions.
const pocketBaseUrl = 'https://getpocket.com/v3';

//The getIds function retrieves a list of all item IDs from Pocket.
const getIds = async () => {
    const retrieveEndpoint = '/get';
    const requestParams = `?consumer_key=${CONSUMER_KEY}&access_token=${ACCESS_TOKEN}`;
    const urlToFetch = `${pocketBaseUrl}${retrieveEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return Object.keys(jsonResponse.list)
        }
    } catch(error) {
        console.log(error);
    }
}

const ids = await getIds();

//This section renders the list of IDs that we will archive in the required JSON format for the Pocket API.
const actionsArray = [];

for (let i = 0; i < ids.length; i++) {
    actionsArray.push({
        "action": "archive",
        "item_id": ids[i] 
    })
}

const jsonActionsArray = JSON.stringify(actionsArray);

//The archive function archives all items retrieved from Pocket. 
const archive = async () => {
    const modifyEndpoint = '/send';
    const requestParams = `?consumer_key=${CONSUMER_KEY}&access_token=${ACCESS_TOKEN}&actions=${jsonActionsArray}`;
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