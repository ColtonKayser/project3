# Project 3: U.S. National Parks Tracker

## Link to Live App
https://nationalpark.herokuapp.com/#

## About
The United States has sixty-one protected areas overseen by the National Park Service, an agency of the Department of the Interior. The Parks are often created as a means of environmental and animal protection, but are also frequently visited by citizens and foreigners alike through tourism.

Our [National Park Tracker](https://nationalpark.herokuapp.com/) lets you search for parks and NPS destinations by state and save them to a customizable park list where you can edit and delete each park’s information. You can also create a park and add that park to the saved list, to view, edit, or delete later.

## Technologies Used


• Express
• MongoDB
• Mongoose
• AngularJS
• Node.JS
• JavaScript
• HTML
• CSS
• Partials
• Skeleton
• Models, Views, Controllers Structure
• AJAX
• API Integration
• Heroku


## API Functionality
Our Find Park form pulls information from the [National Parks Service API](https://www.nps.gov/subjects/digital/nps-data-api.htm). We accessed data related to each park's name, designation, description, and url by making an AJAX call and then used AngularJS to populate those data points on the page.

We also had our own API, which was called into play once the user added their own park or saved an NPS location. In addition to the information shown from the NPS API, we added the ability for the user to add notes and a checkbox to indicate whether they had visited the park. We used express, MongoDB, and mongoose to host data locally and then retain that data once we pushed the app to Heroku.

Our schema for user park data mimicked some of the key pair values from the data objects we pulled from the NPS api to make the integration of that data easier.

## Angular
This app is designed to be a single page application. We used partials and angular to achieve this goal, and have different elements load dynamically on the same page. We used the angular directives ng-repeat, ng-click, ng-submit, and ng-if to dynamically populate, manipulate and edit data on the app.


## Approach
We started by exploring the NPS API to figure out what data we could pull from it, and how to display the information we wanted. The documentation listed much more information than was actually available through the API, so we had to adjust the goals of our app. Next we created the form and route for the user to add a new park. We made sure we were able to view all parks created by the user in one location before moving on to creating a way for the user to save a location from the NPS API. We had to make sure the data about the park that the user selected from the NPS API was saved to our API so it would display in saved parks, and so the user could edit it. Once we were satisfied with our app’s functionality, we focused on smaller details, like adding the ability to show/hide information, clearing forms, and ways to let the user know that something happened when they clicked. We used partials to display the different information listed in the navigation bar, and skeleton to give our app a basic aesthetic which we accentuated.

## Collaborators
• Colton Kayser
• Alex Hawkins
• Kristi Roby

## Setup
To run this project, install it locally using npm.

## User Stories
The user can see all NPS locations in the state they select
The user can see more information about an NPS location when they click on it
The user can save an NPS location to their saved parks list
The user can edit a park in their saved parks

## Unsolved Problems
• Saved parks from NPS API cannot be updated at first. The information will not save; instead, the card will bounce to the bottom of the page. Then the user is able to edit the card.
• If a second park is saved without refreshing the app, in the “my parks” section, the update information contains the same text as the previously edited park.
• “Park Saved” message appears at the top of the page instead of within its respective card.
• Update form does not clear after submit.
• Once park is updated, update form does not toggle to closed.
