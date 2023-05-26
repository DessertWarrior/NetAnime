# NetAnime | Anime Search Engine | Full Stack Application

This is a full stack application that displays a gallery of anime that aired in April 2023. The front end is built using Bootstrap and React, while the back end is built with Express. The data is fetched from a database and dynamically present the changes on the webpage.


## Features
    

- Click on a card to reveal detailed information about the anime fetched from the server.
- Click the edit button to modify the anime information. Once clicked, a list of text boxes will pop up for the user to edit the information. If the user modifies the score, it will be color-coded based on its value. A score of 7 or higher will be green, a score of 4 or higher will be yellow, and anything below 4 or not a number will be red.
- When editing the genre portion, the user can add different genres by separating them with a comma.
- All modifications are dynamically presented on the anime information, and once the user click the save button, a patch request will be sent to the server to insert the new data to the database.
- Click the plus icon to create an empty card, and once the user edits the card and clicks save, a post request will be sent to add a new data to the database.
- Click the delete icon to remove an anime from the gallery. The website will get the current anime page information and delete the anime from the database.
- The search and category options allow the user to sort out the animes in the gallery based on keywords.

## Technologies Used

- Bootstrap
- React
- Express

## How to Run the Application

1. Clone this repository.
2. Install the dependencies using npm install.
3. Start the development server using npm start.
4. start your front end page using npm run dev, and ctrl + click on the server domain.

## IImprovements

- Given the 2-day timeframe of the project, there were limitations on the features that could be implemented. There is room for improvement in terms of functionality and UI/UX design.
- The collapse transition for the category section could be smoother. This is because the application uses Bootstrap, which relies on default CSS styles.
The login function has not yet been implemented. In the future, it would be necessary to use cookies to store user account information.
- An authorization feature could be added, where if a user enters an admin account, they would be granted permission to make changes and send them to the server. If a user is not an admin, they would be redirected to the register form. All features would still be available, but changes would not be able to modify the database. Instead, modifications would be stored in a JSON file. Once the user logs in, these changes would be reflected only to the specific user.

## Conclusion

This Anime Gallery Full Stack Application provides a user-friendly interface for browsing and editing anime information. It has default server request http methods for the user to GET, POST, PATCH, and DELETE anime from the database, as well as search and sort the gallery based on keywords.
