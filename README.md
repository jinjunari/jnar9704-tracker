# jnar9704-tracker: DECO2017 Final Prototype
Bookshelf is based on the idea of promoting consistent reading. “Bookshelf.”’ enables users to simply record and keep track of all the books they have read, as well as
functions that let users leave personalized reviews and reflections for each title they can look back on. 

## DEPLOYMENT PROCEDURES
**Please make sure Node.js is installed**
1. Clone the GitHub repository.
2. Open Terminal and navigate to the project directory.
3. Run the following commands:
```BASH
npm install express
npm run start
```
4. The application will be accessible at http://localhost:8888 in your local browser.

## CONFIGURATION
The application is designed to support most standard screen dimensions, but the following dimensions provide the best viewing experience:
- Web: 1440px × 900px
- Mobile: 489px x 926px

### Sample Form Inputs
You can write in any book details you would like. But here are some sample inputs to get you started. 
- Title (The name of the book): The Great Gatsby
- Author (The full name of the author): F. Scott Fitzgerald
- Category (The category of this genre): "Classics"
- Image (A .png of the book cover): https://imgur.com/lwPwrOx (You will need to download this image to upload)
- Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## THE DEVELOPMENT PROCESS:
During the development process, several decisions and challenges were encountered. Here are some key points:

- Decided to scrap the menu on the navigation bar as I felt like it was unnecessary when everything was on one page anyway.
- Decided to add some placeholder text in the form for an easier user experience.  

- I found it challenging to make the booklist table be responsive for very small screens. The only way I can think of making the table work on a small screen (without splitting the structure) was to make users scroll horizontally. 

- I struggled to add images for the book cover in the sample book data in the book list table. For now- i've left it as null ;-;

### SOME LESSONS LEARNT:
- Comments and formatting are crucial!!: Having consistent comments throughout the code and neat formatting (e,g, indents, line breaks) especially helps when reviewing code.
- Regular Revisions: I found that regularly reviweing the code was important to preventing errors and long sessions of debugging latere on. 


## MOVING FORWARDS- Recommentations and Improvements:
- Consider integrating book API's so that users do not need to manually input a book cover. 
- Consider adding a smooth dropdown transition for the book review section.
- Improve performance by implementing loading animations, implement caching mechanisms etc as the booklist potentially expands. 


