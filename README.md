# _Food Tracker Application_
###_Epicodus javascript Code Review for week 2, 10.26.2016_

#### By _Seth Kendall_

## Description

_This product is designed to take in details and calories for a food and store them allowing to user to review and edit them later._

## Specifications

|Behavior|Input|Output|
|--------|:---:|-----:|
|The program will accept input of a food with calorie count and details.|"Fries, 501, 'Nice and greasy'"|['Fries' and details are logged on the page]|
|The program will allow user to filter view for only high or low calorie foods.|[User changes pipe selector from 'all'  to 'low']|[Only low calorie foods are dislayed on the screen.]|
|The program will allow user to edit details of a logged food.|[User clicks on a food logged on screen.]|[Edit for shows on screen allowing the user to edit the logged food.]|

## Setup Instructions

* _Clone repository from github_
* _Open a command prompt and navigate to the cloned project directory_
* _Run command "npm install"_
* _Run command "bower install"_
* _Acquire an API key from a personal github account_
  * _On a github profile page go to "Settings" from the drop-down menu at the top right_
  * _Click "Personal Access Tokens" from the sidebar_
  * _Scroll to the bottom of the options page and click the button labeled: "Generate New Token"_
  * _Copy the API key to the clipboard_
* _Return to the cloned project directory and create a new filed called ".env"_
* _Paste your API key to this file with the following format: 'exports.apiKey = "{your_key_here}";'_
* _Save the .env file, navigate to the project directory in a command prompt, and type "gulp serve"_
* _Project will open in a browser window_

## Licensing

*This product can be used in accordance with the provisions under its MIT license.*

copyright (c) 2016 **_Seth Kendall_**
