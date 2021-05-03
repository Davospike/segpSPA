```
Test Plan - Navigating: Info -> Quiz

I want to be able to navigate to a page where I can read about fake news in detail. Then, be able to choose a quiz.

1 Outline/prerequisites
- Using Chrome/Safari 
- Desktop environment.

2 Setup and Teardown

Setup

- Make sure the web-app is deployed correctly with no errors shown.
- Ensure user is currently at the Landing page.

Teardown

- User Selects 'Welcome Page'
- close browser
- docker-compose down.

3 Tests

A. User navigates to Fake News info page.

1. Scroll through landing page
2. Select "Learn more about fake news" link at bottom of landing page

B. User navigates to a Quiz

1. Can see page of Fake News Test. Scroll to bottom
2. Select "Take the quiz" link at the bottom of the page
3. Ensure all quizzes are shown with buttons underneath
	- General, Brexit, Coronavirus, Climate Change, "Have you enjoyed our quiz?"
	- with their respective logos and some explanation
4. Select 'General' quiz from list
5. Ensure all elements of Quiz Questions are shown
		- Headline
		- Current Question (Out of 10)
		- Article Snippet
		- Answer boxes
		- Navigation tools to move through quiz

C. User goes back to welcome page 

1. User clicks welcome page link at top of page
2. Back at landing page
```

