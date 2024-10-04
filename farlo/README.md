# INSTRUCTIONS

Run 'npx ts-node scraper.ts' in the backend/src folder to generate the web scraper json file

run 'npm start' in the root folder to view the application








# Farlo JavaScript Tech Test

Congratulations on being selected to progress to the next stage of the interview process and to complete our technical test. The purpose of this test is to assess the quality of the code that you write, your approach to problem solving, and your ability to reason about the approaches and practices you have implemented.

There isn't necessarily a correct or perfect submission for this test, different approaches have various benefits and downsides, however you will be expected to defend your decisions if you are asked to attend a face-to-face interview.

In the same vein, do not worry too much about how much progress you make through each part of the test, but rather make sure that what you do complete is of a high, production-ready, standard. We expect you to spend around 3 hours on this task.

If you have any questions please do not hesitate to contact us.

## The Task
---

As a JavaScript Developer at Farlo, you will be required to work  across the front-end of our sites. This will involve extending and building new Node.js services that will integrate with our React front-end.

For this task, we would like you do 3 things;

1. Build a Node.js scraper that scrapes theatre shows data from an API ever 5min and stores them in a local file.
2. Create a Node.JS API endpoint that serves the shows from the local file.
3. Build a simple React component that consumes this endpoint and displays the shows on the browser.

### Scraper

You should fetch the shows data from the following endpoint and write the results to a local file.
- [https://officiallondontheatre.com/wp-json/shows/all-open](https://officiallondontheatre.com/wp-json/shows/all-open)

### API Endpoint

Your API endpoint should accept a `GET` request that returns the shows stored in the local file as JSON

### React Component

Recreate the component in the attached "react-component.jpg" image by fetching the shows from your endpoint.

In the `/shows/all-shows` endpoint you scraped earlier, you will find a `see_tickets_url_infos` property that stores an array of booking links. If the array is empty, then that show should appear as "SOLD OUT". If there are items in the array, then you should pick the url with a subdomain of `tktsonline.seetickets.com` as the booking link and if that is not available fallback to using the `officiallondontheatre.seetickets.com` url.

- Shows should be displayed on a single column grid on mobile device, two columns on medium size screens and three columns for large screens
- Each show tile should include the show image, title and click through to the correct booking link
- "SOLD OUT" shows should be greyed out with a label of "SOLD OUT" in place of the "BOOK NOW" CTA. You should also **not** be able to click on these tiles.
- Shows tiles on the same row should all be equal height


![React Component](react-component.jpg)


## Project Setup
---

We recommend you use `create-react-app` as this will give you a lot of functionality for free, however if you have your own boilerplate then you are welcome to use that instead. Please separate the boilerplate and your own work into separate commits to make the work of the reviewers easier.

Please include a COMMENTS.md with any decisions you made that you feel are worth highlighting and concessions you had to make due to the time constraints, as well as anything else you think we should be aware of when reviewing your code.