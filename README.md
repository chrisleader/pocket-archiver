This is a program to retrieve and archive your saved items in Pocket.

Access Pocket's developer documentation [here](https://getpocket.com/developer/docs/overview) to create a new application. Then configure the `CONSUMER_KEY` and `ACCESS_TOKEN` variables in your .env file. If you need help getting a Pocket access token, you can use Simon Williamson's site [here](https://simonwillison.net/2019/Oct/5/get-your-own-pocket-oauth-token/). *Note: this is not an endorsement. Always exercise caution and judgement when sharing keys with third parties.* 

You can run this program in Node.js by saving this folder locally, navigating to it in your terminal, and then running `node pocket-archive.js`. The [Node Fetch](https://www.npmjs.com/package/node-fetch) and [dotenv](https://www.npmjs.com/package/dotenv) modules are required.
