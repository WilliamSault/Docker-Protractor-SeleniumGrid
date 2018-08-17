#!/bin/sh
docker container run --rm --network="host" -v "$(PWD)/Protractor/Tests":/usr/src/app/Tests williamsault/protractor:latest

