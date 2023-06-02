# NetAnime | Anime Search Engine

## Tech Stack

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

[![Git](https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
![Slack](https://camo.githubusercontent.com/870d2945e15dde83583f64ea1f3f4471702e45bf30fa884412da74cb7731ae42/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465)
![Zoom](https://camo.githubusercontent.com/c6c90c4d74d5fad08da3e2c31c556ea8a8b45a6bd5756b6e49111d9825cde56f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5a6f6f6d2d3244384346463f7374796c653d666f722d7468652d6261646765266c6f676f3d7a6f6f6d266c6f676f436f6c6f723d7768697465)


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
