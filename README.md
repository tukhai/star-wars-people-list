## Introduction

This project is a part of the Front End Engineer Test.

#### Scope of Assignment
With API from swapi.co, build a single page application where users can view the details about all the people in the Star Wars Universe.<br>
Estimated Duration: 3 days

#### Assignment Details
You are given 3 days (72 hrs) to complete the task.<br>

Use a state management tool<br>

The code should be in a production-ready state<br>


Your submission will be judged on - <br>
1. Code quality (https://www.perforce.com/blog/qac/what-code-quality-and-how-improve-it)<br>
2. Tooling choices<br>

Basic features of the application should include:<br>

View all people in the Star Wars universe.<br>

View the details of every person in the Star Wars universe.<br>

/people should display all people<br>

/people/:personId should display a person by id in detail<br>


## Project Accessing

### Deployment

This project has been deployed at: [https://github-repo-searching-app.herokuapp.com/](https://github-repo-searching-app.herokuapp.com/) <br>
Please visit the url to access the project.

### Project clone
Alternatively, you can clone this project code. <br>
Make sure node and npm are installed in your local machine: `brew install node` <br><br>
In the project root directory, you can run it in 1 of the following modes: <br>

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Explaination

### Main page (/people)
Calling the /people API but there are only 10 items for each call. This is to reduce loading time, and make the landing page looks nicer. The rest of the items could be accessed if clicking to pagination.

### Detail page (/people-details)
Just simply calling /people/:personId api and render the data into a simple table.

### React-router & localStorage
In this application, react-router is used to route between our main page and detail page. <br><br>

If from main page, we click to the pagination (for example page no.3), then we click to an item on page no.3, we'll be redirected to /people-details page. Then, if we click to "back" button of browser, we'll be back to main page, but on page no.1 not page no.3, which is not a great User Experience.<br>
To solve this issue, we simply save data of current page into localStorage.

### Mobile responsive
This web app is optimize for both mobile and desktop screen.