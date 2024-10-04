
### How to run the application

1. Navigate to the farlo directory and install all dependencies in both Backend and Frontend directories 
2. Run `node scraper.js` in the backend to scrape the data and write it into the showsData.json file
3. Run the server `npm start` in the backend
4. Run the Frontend `npm start` in the frontend to view the application

The backend should be running to serve data, and the frontend will allow you to interact with the application in your browser.


### Technical Test Approach

1. **Understanding Requirements**
   - Thoroughly reviewed the specifications to ensure a clear understanding of the expected functionalities and design.
   - Prioritised tasks based on their complexity and dependencies.

2. **Choosing Technologies**
   - **Backend**: Used Node.js with Express for the server, enabling easy setup and fast response handling.
   - **Frontend**: Utilised React to build a responsive user interface, ensuring a smooth user experience.
   - **Testing**: Implemented Jest and React Testing Library to ensure robust testing for both backend and frontend components.

3. **Code Organisation**
   - Structured the project into clear directories (backend, frontend, \_\_tests\_\_) to improve maintainability.
   - Followed consistent naming conventions for files and components to enhance readability.

4. **Implementation Practices**
   - **Modular Design**: Kept the code modular by separating concerns (e.g., API calls, components, styles).
   - **Error Handling**: Incorporated comprehensive error handling, particularly in API calls, to manage failures gracefully.
   - **Environment Variables**: Used dotenv for managing sensitive information, keeping API keys and URLs out of the source code.
   - **Responsive Design**: Implemented CSS Grid for a flexible layout that adapts to different screen sizes.

5. **Testing**
   - Wrote unit tests for core functionalities, ensuring all critical paths were covered.
   - Used mocks for external dependencies to isolate tests and simulate various scenarios.
   - Conducted tests for error states to validate proper handling and messaging.

6. **Documentation and Comments**
   - Included comments in the code to explain complex logic and decisions, making it easier for others to understand.
   - Created a COMMENTS.md file to provide insights into the project decisions and any concessions made due to time constraints.

### Decision Rationale
- **ES6 Modules**: Chose ES6 syntax for modernity and readability, in line with industry standards.
- **Fetch API**: Utilised `node-fetch` for API calls, balancing ease of use with functionality.
- **CSS Grid**: Selected CSS Grid for layout management, enhancing responsiveness without complex media queries.

### Trade-offs
- **Time Constraints**: Focused on core functionalities, resulting in some edge cases not being covered in testing.
- **Error Messages**: Implemented basic error messages; more user-friendly messaging could be developed with additional time.

### Future Considerations
- **Increase testing coverage** to include more edge cases and improve asynchronous error handling.
- **Development**: "Implement concurrency to handle tasks in parallel."
- **Expand documentation** to make it easier for new developers to onboard and understand the project.
- **Features**: Add a modal for the 'About the show' section of the UI application.

I look forward to any feedback you may have and would be keen to discuss my approach further during the next stage of the interview process. Thank you once again for this opportunity!