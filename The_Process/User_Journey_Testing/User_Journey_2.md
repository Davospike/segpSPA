

```
Test Plan - Taking Quiz

I want to be able to complete a quiz and see the answers.

1 Outline/prerequisites

- Using Chrome/Safari 
- Desktop environment.

2 Setup and Teardown

Setup

- Make sure the web-app is deployed correctly with no errors shown.
- Ensure user is currently at the Landing page.
- Select 'Quiz' tab at the top.
- Select "Take the China".

Teardown

- User Selects 'Welcome Page'
- close browser
- docker-compose down.

2 Tests

A. User Completing Quiz

1. Ensure all elements of Quiz Questions are shown
		- Headline
		- Current Question (Out of 10)
		- Article Snippet
		- Answer boxes
		- Navigation tools to move through quiz
2. User selects 'Real'
		- Blue tick appears in 'Real' answer box
3. Moves to next question, selecting 'Next' button
4. Ensure new question is shown
		- Question number should increment by 1
		- Both answer boxes should be unchecked
[Repeat Steps 1, 2, 3, 4 Question 10 is completed]
5. Select 'Submit Quiz'
6. Ensure answer page is shown
		- Shows what the user entered
		- Shows if the user got the question correct
		- Shows headlines referencing quiz question
		- Fake articles should hold a link to a debunking article
		- Correct/Incorrect colour scheme
		- Check ALL debunking article links
		
B. User goes back to welcome page 

1. User clicks welcome page link at top of page
2. Back at landing page
```

