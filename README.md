# Repository Upgrade: [marvel-next]

This repository is an upgraded version of my previous repository ([MarvelComic](https://github.com/truonganletk/MarvelComic)).

## Website Overview

The website serves as a practice project for beginners, providing an opportunity to dive into Next.js, custom Material-UI theming, and Cypress testing. It acts as a starting point to gain hands-on experience with these technologies and explore their capabilities. The website showcases a list of characters and comics, offers detailed pages for each item, and includes search functionality based on characters or comics name starting with specific letters. The project utilizes the Next.js framework, React library, Material-UI for styling, and integrates with the Marvel Comics API for fetching data.

You can use this account for testing or create a new one.

```sh
#email & password
tuan@gmail.com
abc
```

## Technology Stack

The main technologies and frameworks used in this project include: Nextjs, Reactjs, Material-UI, Cypress and Marvel comics API


## Main Features

- Display a list of characters and comics
- Navigate to detailed pages for each character or comic
- Implement search functionality to filter characters and comics based on name initials
- Utilize skeleton loading to enhance the user experience during data fetching
- Include a splash screen for an engaging initial loading experience
- Implement protected routes with a login feature using a hardcoded email and password (Save the login state in the browser's localStorage)

## Usage

1. Clone repo or download it.
2. First install all dependencies

```sh
#with npm
npm install

#or with yarn
yarn install
```

3. Create a .env file. Replace values with yours !!!

```sh
NEXT_PUBLIC_PUBLISH_KEY=
NEXT_PUBLIC_PRIVATE_KEY=
NEXT_PUBLIC_HASHED_KEY=
```

4. Now run the app

```sh
npm run dev
```

## Running test
1. Checkout the branch ```cypress-testing```
2. Install all dependencies. To open the Cypress test runner, run the following command:
```sh
npm install
```
  
```sh
npx cypress open
```
The Cypress test runner will open, showing the available test files.

3. Click on a test file to run the tests within it. Cypress will launch a browser window and execute the tests.

Note: Make sure the development server is running ```npm run dev``` before running the Cypress tests. 

Feel free to explore the repository and make use of the code and resources available. Contributions, feedback, and suggestions are always welcome.

Happy coding!

