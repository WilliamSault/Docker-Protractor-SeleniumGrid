# Protractor-SeleniumGrid

This project allows the user to run protractor tests having only docker installed

## Prerequisites

You must have docker installed. Vist <https://www.docker.com/> for more information.

## Setup

First, you need to run the selenium server by executing the docker-compose file from the terminal

```bash
docker-compose
```

This will now spin up the selenium server with a chrome and firefox node. The selenium server is exposed on server at port 4444 by default but this can be changed in docker-compose.yml. Next, we can run the tests from another terminal:

```bash
docker container run --rm --network="host" --name protractor williamsault/protractor:latest
```

## Running your own tests

You can of course run your own scripts. To do this map the volume `/usr/src/app/Tests` to a folder with your tests. To execute the tests you must include `conf.js` which details the specs of the test.

```bash
docker container run --rm --network="host" -v "$(PWD)/Protractor/Tests":/usr/src/app/Tests williamsault/protractor:latest
```

or by running the included shell script

```bash
sh RunTests.sh
```
## Visulising the tests

An extra option is to visualise the test cases being ran. To do this you need a [VNC viewer](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en). I recommend using the chrome extension for ease of use.

By default chrome is exposed on `port 5901` and firefox on `port 5902`. No password is required for either.