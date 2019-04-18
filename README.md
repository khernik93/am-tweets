# am-tools project

## Overview

* After running the tests, HTML reports (both from test cases and test coverage) can be found in *tests-report* folder in the root of the project
* In order to analyze the bundle while running the project, please go to *config/constants.js* file and set *SHOW_BUNDLE_ANALYZER* flag to *TRUE*
* Application is running with AoT compilation
* There is a backend proxy running which calls the tweeter API directly, it's in the *server* folder. In dev mode, webpack-dev-server uses it directly, in prod mode it's used to serve *index.html*
* The application can be deployed with the *docker-compose*
* Unit tests are in the *test* folder
* The application's component structure is divided into container/component (aka smart/dump) architecture. Container components are connected to store and manage the state, while dumb components manage displaying of the data they receive from containers

## Installation

```
$ npm i
```

## Running in dev mode

```
$ npm run bff:server
$ npm run start
```

* this will run the server on port 3000 by default (to change the port, please change it in *server/index.ts* file, as well as in *config/constants.js* file)
* the application will start on port 3001 by default (to change this port, please change the *DEV_PORT* constant in *config/constants.js* file)
* in the dev mode, the devpack web server will handle the application flow (+ hmr will handle reloading the website on code changes)

## Running in prod mode

```
$ npm run start:prod
```

* this will run the server on port 3000 as in the dev mode, but it won't run any webpack-dev-server...instead, *dist/index.html* will be exposed as a static resource and used on production (no hmr here)

## Unit testing

```
$ npm run test
```

* see *overview* part to check where to find test cases and coverage reports

## Linting

```
$ npm run lint
```

## Deployment

```
$ docker-compose up -d --build
```

* this will deploy the application under port 80 on the host machine (3000 in the docker network)
* production mode will be used
