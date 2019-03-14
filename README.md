# AppHub 

[![Known Vulnerabilities](https://snyk.io/test/github/esdc-devx/AppHub/badge.svg?targetFile=app-hub-api%2Fpackage.json)](https://snyk.io/test/github/esdc-devx/AppHub?targetFile=app-hub-api%2Fpackage.json)
[![Build Status](https://dev.azure.com/dx-team/AppHub/_apis/build/status/esdc-devx.AppHub?branchName=master)](https://dev.azure.com/dx-team/AppHub/_build/latest?definitionId=2&branchName=master)

A dashboard for displaying information on systems department wide. 

## Run Integration and a11y Tests

Run the following command in the `integration-tests` folder. 

### Setup Tests
```
npm ci
```

### Run Tests
Run the following command to test the app in electron headless mode
```
npx cypress run
```
_If running locally a video copy of the tests will be put in `integration-tests/cypress/videos` to disable this functionality add the flag `--config video=false` when running tests_

Use the following command to view the tests in the Cypress Test Runner
```
npx cypress open
```

## Run System 

The following command will build and bring up the API and GUI servers
```
./start-system.sh
```

The following command will bring down the system 
```
./stop-system.sh
```





## GUI Project Setup
Run the following command in the `app-hub-gui` folder. 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## API Project setup
Run the following command in the `app-hub-api` folder. 
```
npm install
```

### Compile and hot-reloads for development
```
node index.js
```
