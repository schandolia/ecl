# Setup
Use `yarn` instead of `npm`
* update the database details before running locally
* `yarn develop` for starting the project
* `yarn build` to update the admin panel
* `yarn add` to add dependencies

# Development notes
* Renaming a field or collection might drop that field's data. 
* Use shorted names as the postgres has a limit of 65 characters for fk naming

# Deploy on fly.io
* Develop on local first 
* Trigger deployment from local setup
* Install Fly CLI as per this [doc](https://forum.strapi.io/t/fly-io-deployment/22438)
* Use `fly auth login` to login to fly.io
* Use `fly deploy` to push your changes on production
