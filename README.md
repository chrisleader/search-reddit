# Search Reddit

## Overview
Search Reddit provides a simple interface for exploring Reddit. You can view a continuously deployed version of this project [on Netlify here](https://searchreddit.netlify.app). 

## Features
* Search any Reddit topic and view the top 25 results
* If, à la Google, you're feeling lucky, navigate off-site directly to the top result on Reddit
* Filter search results based on relevance and time (supported on web and mobile landscape orientation)
* View a post and top comments
* Navigate off-site from a post to view it on Reddit
* Navigate off-site from a comment to view its full thread on Reddit
* Find an easter egg 🛸

## Technology
Search Reddit is built with React v18, React Router v6, and Redux v8, among other packages. Some notes:
* This app uses the undocumented [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON). This enables a simple implementation without an OAuth workflow, but also precludes write operations.
* React components are configured across index.js, App.js, SearchForm.js, Results.js, Posts.js and NotFound.js.
* redditSlice.js initializes and stores the state for most aspects of the app. Redux's extensible architecture allows for the implementation of additional slices in the future should the project be expanded further.
* persistReducer is also utilized to ensure state persistence across a session.
* React Router routes are configured in App.js.
* Jest is used for testing the helper functions.
* Lighthouse gave scores of 100 for performance, accessibility, best practices, and SEO:

<p align="center"><img width="600" alt="Lighthouse Scores" src="https://user-images.githubusercontent.com/6752562/215314328-297e1da6-8b6f-4010-a2d4-1fc0d113ac04.png"></P

## Wireframe
The (very simple Google-inspired) initial wireframe for this project can be found [here](https://www.figma.com/file/F1tokKFFEYAwaG44DK1eLh/Reddit-Client?node-id=0%3A1&t=5uDNHUXfGCIzeNVP-1). The rest of the design was produced through iteration with CSS as the project evolved.

## Future Enhancements
Any of the following would be great additions to this project!

### Features
* Exploring subreddits
* Returning more than 25 search results (via pagination or, ideally, infinite scrolling)
* Animations and transitions, especially to indicate load status while awaiting an API response for results and posts
* Scroll restoration on mobile
* Dark mode
* Progressive web app support (back buttons 🔙 will need ot be added)

### Bugs
* There's a known issue in which the back button behavior is buggy (specifically on the results page). This is due to some limitations with and complexity around the React Router implementation. Ideally, forward and backward navigation should be identical to the experience of searching Google.
