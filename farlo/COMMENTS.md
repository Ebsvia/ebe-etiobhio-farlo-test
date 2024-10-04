**Project Overview**

This document highlights the key decisions, trade-offs, and considerations made during the development of the project. The task involved scraping data, serving it via an API, and displaying it in a React front-end. The technologies used include TypeScript, Axios, React, cron, and Cypress for testing. Time constraints limited certain enhancements, which are noted for future improvements.

**Key Decisions and Trade-offs**

**1. Using TypeScript**

- **Decision**: TypeScript was used for both the backend and frontend.
- **Reasoning**: TypeScript provides static typing and better developer tooling, which improves code reliability and maintainability. It ensures that both the API and UI handle data correctly and avoids common type-related issues.
- **Trade-offs**: TypeScript can add complexity, especially when defining complex types or integrating third-party libraries. However, the benefits of early error detection and type safety outweigh these concerns, particularly for long-term maintenance.

**2. Using Axios for HTTP Requests**

- **Decision**: I used Axios for making HTTP requests to the API on both the backend (for scraping) and frontend (for consuming the API).
- **Reasoning**: Axios is a popular, well-supported HTTP client that simplifies request and response handling. It also supports promises, making it easier to work with async/await. Axios has a more feature-rich API (such as automatic JSON parsing and better error handling) compared to the built-in fetch.
- **Trade-offs**: Axios introduces an extra dependency. However, its superior feature set and ease of use make it worth the trade-off compared to using fetch or other alternatives.

**3. Scraper with cron**

- **Decision**: The scraper is scheduled using the cron library to run every 5 minutes.
- **Reasoning**: cron offers a simple yet flexible way to manage scheduled tasks in Node.js. The scraper fetches show data from the API and stores it in a local file.
- **Trade-offs**: JSON file storage is not scalable for large datasets. In a production environment, a database like MongoDB or PostgreSQL would be more efficient and reliable, especially for concurrent reads/writes.

**4. File Storage for Scraped Data**

- **Decision**: Scraped data is stored in a local JSON file.
- **Reasoning**: This approach meets the requirements and simplifies persistence without requiring a database setup. 
- **Trade-offs**: File storage is not suitable for large-scale applications, as it can cause performance bottlenecks or data corruption in concurrent scenarios. In a production setting, the scraper would write to a database for better scalability and data management.

**5. React Component with Axios**

- **Decision**: I used Axios to fetch show data from the API in the React component.
- **Reasoning**: Axios simplifies API calls and provides built-in support for handling JSON responses, error states, and request cancellation. The component uses useEffect to fetch data when it mounts and stores the result in the component's state.
- **Trade-offs**: Since this is a simple React component, advanced error handling (such as retries or showing specific error messages) was omitted due to time constraints. These can be added later to enhance the user experience.

**6. Handling of Sold-Out Shows**

- **Decision**: Shows that have no valid ticket URLs are displayed as "SOLD OUT" and styled accordingly in the UI.
- **Reasoning**: This feature meets the requirements. By distinguishing sold-out shows with greyed-out tiles, users can easily see which shows are unavailable for booking. This improves the overall user experience by providing visual clarity and preventing interaction with unavailable shows.
- **Trade-offs**: The current implementation is minimal. Future enhancements could include better visual cues, such as animations or notifications when a show sells out, and providing more informative messages.

**7. Unit Testing with Jest**

- **Decision**: Jest was used for unit testing the API and some critical logic in the scraper.
- **Reasoning**: Jest is a well-supported testing framework that provides fast and reliable unit testing with excellent integration with TypeScript. It ensures that the core logic of the API and backend works as expected.
- **Trade-offs**: Some edge cases were not tested due to time constraints. Future improvements could include more comprehensive tests, especially for error scenarios such as API failures or invalid pagination parameters.

**8. Unit Testing with Cypress**

- **Decision:** I used Cypress to write unit tests for both the front-end and API.
- **Reasoning**: Cypress is a powerful end-to-end testing framework that can be used for both unit and integration tests. It simplifies browser interaction, allowing the testing of React components and ensuring that the API endpoint behaves as expected.
- **Trade-offs**: Due to time constraints, not all possible test cases were implemented. In a more developed project, I would aim for higher test coverage, including edge cases and failure scenarios (e.g., network failures, empty datasets).

**9. CSS Grid for Responsive Layout**

- **Decision**: I used CSS Grid for laying out the show tiles in a responsive manner.
- **Reasoning**: CSS Grid allows for a simple, clean layout that adapts to different screen sizes (1 column for mobile, 2 columns for medium screens, and 3 columns for large screens). It meets the requirements without introducing unnecessary complexity.
- **Trade-offs**: The design is basic and custom. In a production environment, I would consider using a UI framework like Material-UI or TailwindCSS for more robust, responsive design and consistency across components.

**Concessions Due to Time Constraints**

**Limited Error Handling:**
While basic error handling is implemented in both the scraper and API, more comprehensive error management (e.g., retries, exponential backoff, and logging) was not included.

**No Database:**
Due to time constraints and requirements, I opted for storing data in a JSON file. In a production environment, I would integrate a database like MongoDB or PostgreSQL to handle larger datasets and ensure better data integrity.

**Pagination UI:**
Although the API supports pagination, I did not implement a front-end UI for navigating through pages. Adding pagination buttons or infinite scrolling would improve the user experience.

