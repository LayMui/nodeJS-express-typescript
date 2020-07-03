# Nodejs + Express + Typescript

## Prerequisites

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 10 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)

## To get started
npm init to create the package.json
tsc --init  to create tsconfig.json
npm i express to install the express framework for nodejs
npm i body-parser to parse the incoming request
npm i nodemon restart the node server whenever there is changes in the source codes
create src/app.ts which is the main entry point where we spin up the server 
## Usage

```
npm i
tsc -w
npm start                 # installs the node modules
Go to postman create a new request
http://localhost:3000/todos/ and in the raw body json data
{ 'text': 'testing' }
the response body: 
{
    "message": "Created the todo.",
    "createdTodo": {
        "id": "0.3822387125783371",
        "text": "testing"
    }
}

in the browser: http://localhost:3000/todos


```

