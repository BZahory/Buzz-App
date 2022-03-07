## Buzz: Democratic Crypto-Investing

Buzz is a cryptocurrency trading app that allows you to create and invest in democratic cryptocurrency portfolios. built with React Native, JavaScript, and TypeScript.

This project is currently in development, and many features are not fully functional because there is no working back end yet. Unusable features are:

- The light mode color palette is currently profoundly ugly, so switching to dark mode is suggested.
- In the settings, the "Change Password," "Messages," "Forums," and "Legal Documents and Disclosures" options are currently dead ends
- All transfer screen buttons are currently dead ends
- Face ID is replaced with a (bypassable) phone password pop-up since Expo does not allow Face ID on non-ejected apps
- The graph data is completely randomized, and will only be time-based regardless of option; although, other options can be used to "reroll" for a different graph
- The buttons for the voting carousel currently do not work, and the options are all the same besides the name.
- The graphs are functional as graphs for the "1D" option, but do not call an API yet (data is randomly generated); the other options can be used to quickly generate a new random graph, but it will still be treated as a "1D" graph.
- The onboarding screens just have placeholders for now.

## Project Screen Shots

![Picture of potential voting screen that resembles Tinder swiping](https://github.com/BZahory/Buzz-App/blob/main/screenshots/activevotes.PNG?raw=true)
![Gif of animated transfer screen, with circles surrounding the balance and a countdown](https://github.com/BZahory/Buzz-App/blob/main/screenshots/transfer.gif?raw=true)
![Gif of opening a portfolio and using the graph](https://github.com/BZahory/Buzz-App/blob/main/screenshots/browse.gif?raw=true)

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install` 

To Start Server (after navigating to the repository):

`npm start`  

Then, scan the QR code with expo on your phone (make sure you're on the same wifi network as your computer).

## Reflection
This is an ongoing project built for Buzz Securities, the company I created in March 2021. The goal was to create a front end concept of a group crypto trading app. As of writing (3/07/22), the goal is to leave little app development left to do after the back end is completed, while offering a visual guideline for what the app is gonna be.

One of the main challenges I ran into was underestimating the breadth of libraries created by the React Native community. I ended up reinventing the wheel on very basic things, like list navigation and a settings menu. I had to throw almost all my code out, and start from scratch so that I could use some immensely valuable libraries; in particular, React-Native-Settings-List and Nativebase immensely accelerated development, with very little compromise. For the features the libraries didn't have, I would either fork it and modify it or use `npx patch-package` to patch it.

The ability to compile into both Android (Java/Kotlin) and iOS (Swift) was the driving factor in choosing React Native. Familiarity was a huge motivator too, as I learned React Native as part of my high school's CS curriculum.

## An ad I made that features the app
[![Video thumbnail featuring a logo of a Buzz, with the subtext, "Buzz, Launching in August"](https://img.youtube.com/vi/pK5-JGeUckc/0.jpg)](https://www.youtube.com/watch?v=pK5-JGeUckc)
