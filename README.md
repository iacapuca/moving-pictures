# moving-pictures

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [GIPHY API key](https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key)

## Installation

- `git clone <repository-url>` this repository
- `cd moving-pictures`
- `npm install`

Create an `.env` file at the root directory of the project and add GIPHY API key
You can obtain a GIPHY API Key at the following link [GIPHY API key](https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key)

`API_KEY=<replace_with_your_api_key>`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)
