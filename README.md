# Free-to-Play Web Gaming Platform

This web application provides users with a platform to explore and view details of free-to-play games. The project is built using HTML, CSS, JavaScript, and utilizes the Bootstrap library for enhanced styling.

## Project Overview

### HTML Structure

The HTML file (`index.html`) contains the structure of the web page, including elements like `<header>`, `<nav>`, `<div>`, `<img>`, etc. External stylesheets and JavaScript files are referenced.

### CSS Styling

The styles are defined in the `styles.css` file. It includes styling for the overall page, background colors, fonts, and the navigation bar. Additionally, it defines styles for active links, hover effects, and the appearance of cards. The CSS incorporates a loading spinner with a dark overlay and uses Flexbox for layout.

### JavaScript Logic

JavaScript functionality is divided into separate files:

#### `UI.js`

Defines a `UI` class with methods to display a list of games and details of a single game. The `displayAllGamesDetails` method renders game cards, while `displayOneGameDetails` displays detailed information. The file also handles UI elements and transitions.

#### `games.js`

Implements a `games` class responsible for fetching game data based on categories. The `getGames` method makes API calls and displays game details using the `UI` class. Event listeners for category selection and card clicks are set up.

#### `details.js`

Defines a `details` class responsible for fetching detailed information about a specific game. The `detailsOfSpecificGame` method makes an API call and displays details using the `UI` class. An event listener is set up to close the details view.

## Dependencies

- **Bootstrap 4.6**: Used for enhanced styling and responsive design. [Bootstrap Documentation](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

## Workflow

1. Upon page load, instances of the `UI` and `games` classes are created.
2. Clicking on a category triggers the `getGames` method, fetching and displaying games based on the selected category.
3. Clicking on a game card triggers the `detailsOfSpecificGame` method, fetching and displaying detailed information about the selected game.
4. A close button in the details view returns to the main games view.

## Live Demo

Explore the live demo: [Web Gaming Platform](https://mohamedali09.github.io/Web-Gaming-Platform/)

## Notes

1. The code follows the ES6 module structure for better organization.
2. The project relies on the [Free-to-Play Games Database API](https://free-to-play-games-database.p.rapidapi.com/) for game data.
3. Comments have been added throughout the code for improved readability and maintainability.
4. Ensure API keys are kept secure and not exposed in public repositories.

## Getting Started

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to explore the free-to-play web gaming platform.

 
---

Feel free to tailor this README template to fit the specifics of your project. Add or modify sections as needed to provide comprehensive information to users and contributors.
