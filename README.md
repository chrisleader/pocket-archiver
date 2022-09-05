This is a program to retrieve and archive your saved items in Pocket.

Access Pocket's developer documentation [here](https://getpocket.com/developer/docs/overview) to create a new application. Then replace ${consumer_key} with your consumer key.

If you need help getting a Pocket access token, you can use Simon Williamson's site [here](https://simonwillison.net/2019/Oct/5/get-your-own-pocket-oauth-token/). *Note: you should never share an application key with a third-party, but if you don't care in this case you can use this unafilliated site for convenience.* Replace ${access_token} with your access token.

You can run this program in Node.js by saving this folder locally, navigating to that folder in your terminal, and then running `node pocket-archive.js`.
