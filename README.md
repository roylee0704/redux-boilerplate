# redux-boilerplate

A Redux boilerplate that enables seamless development workflow for React+Redux+Es6+HotLoader. 

## Install & Run
1. `npm install`
2. `npm start` to kick-start `node-express` server. (hot-loader will be running as well)


## Note
Hot-loader will not auto-refresh changes made at:
- index.html
- index.js

but only on `React Components`, i.e: `containers/App.js`.
 
Hence, if you see the following warnings: `The following modules couldn't be hot updated: (Full reload needed)`,
reload the page yourself.
