# lerna-demo

### Requirements
* Node [v16](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V15.md#16.5.0)
* [Yarn](https://classic.yarnpkg.com/en/)
### Install the project
```bash
yarn
```
This will install all the dependancies for the mono-repo.

### Starting the project
- load a separate console 
```bash
cd packages/app-home-page
yarn dev
```

- load another console 
```bash
cd packages/app-product-page
yarn dev
```

Navigate to [home-page (http://localhost:3000/)](http://localhost:3000/). By clicking one of the diswasher images you will be navigated to the `app-product-page`, the the url is maintained at `localhost:3000`.