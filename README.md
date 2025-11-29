# Filmpire

Filmpire is a feature-rich movie discovery web application built with React.js, Redux, and Material UI. It provides an immersive experience for browsing, searching, and managing movies with comprehensive user authentication and personalization features.

## Features

- **User Authentication**: Secure login/logout with TMDB account integration
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Movie Discovery**: Browse popular, upcoming, and top-rated movies
- **Advanced Search**: Find movies by title, genre, or category
- **Detailed Information**: View comprehensive movie and actor details including cast, crew, and trailers
- **Personal Lists**: Add movies to favorites and watchlist
- **Lore + Universe Mode**: Curated watch orders, timelines, and relationship maps for major franchises
- **Film IQ**: Choose a movie-specific three-question adaptive quiz covering scenes, actors, themes, and color stories
- **Genre Filtering**: Explore movies by specific genres
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Dynamic content loading with smooth transitions

## Tech Stack

- **Frontend**: React.js 18
- **State Management**: Redux Toolkit with RTK Query
- **UI Components**: Material UI (MUI)
- **HTTP Client**: Axios
- **API**: The Movie Database (TMDB) API
- **Build Tool**: Create React App

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API key (required for data fetching)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/filmpire.git
   cd filmpire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your TMDB API key:
     ```
     REACT_APP_TMDB_KEY=your_tmdb_api_key_here
     ```
   - Get your API key from [TMDB](https://www.themoviedb.org/settings/api)

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Browse Movies**: The homepage displays popular movies. Use the navigation to explore different categories.
2. **Search**: Use the search bar to find specific movies or actors.
3. **Filter by Genre**: Select genres from the dropdown to filter movies.
4. **View Details**: Click on any movie to see detailed information, cast, crew, and trailers.
5. **Authentication**: Click the login button to authenticate with your TMDB account for personalized features.
6. **Personal Lists**: After logging in, add movies to your favorites or watchlist.
7. **Lore + Universe Mode**: Open the sidebar and select “Lore + Universe Mode” under *Universe Guides* to explore franchise timelines and guides.
8. **Film IQ Quiz**: Launch Film IQ under *Universe Guides*, pick a movie deck, and run through the tailored 3-question quiz.
9. **Theme Toggle**: Switch between dark and light modes using the theme toggle button.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ActorInfo/      # Actor details component
│   ├── MovieInfo/      # Movie details component
│   ├── Navigation/     # Navigation bar
│   ├── LoreUniverse/   # Lore + Universe Mode screens
│   ├── FilmIQ/         # Film IQ quiz experience
│   └── ...             # Other components
├── services/           # API services
│   └── TMDB.js         # TMDB API configuration
├── data/
│   └── loreData.js     # Static Lore + Universe data store
│   └── filmIQQuestions.js # Static quiz questions
├── utils/              # Utility functions
│   └── index.js        # Helper functions and API setup
├── app/                # Redux store configuration
│   └── store.js        # Redux setup
├── assets/             # Static assets
│   └── images/         # Image files
└── index.js            # Application entry point
```

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Troubleshooting

### Common Issues

1. **API Key Not Working**: Ensure your `.env` file contains `REACT_APP_TMDB_KEY=your_key` (note the `REACT_APP_` prefix is required for Create React App)

2. **Movies Not Loading**: Check your browser console for API errors. Verify your TMDB API key is valid and has the correct permissions.

3. **Build Fails**: Make sure all dependencies are installed and your Node.js version is compatible.

## API Usage

This application uses The Movie Database (TMDB) API for all movie data. You'll need to:
1. Sign up for a free account at [TMDB](https://www.themoviedb.org/)
2. Request an API key from your account settings
3. Add the key to your `.env` file as shown above

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [Material UI](https://mui.com/) for the excellent React component library
- [React](https://reactjs.org/) for the powerful frontend framework

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
