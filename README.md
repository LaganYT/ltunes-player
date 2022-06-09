# Jukebox: Redux

To get the project running, you will just need to install the required packages with npm or yarn, and create a .env file with the following fields:

```
SPOTIFY_CLIENT_ID = xxxxxxxxxxxxxxxxxxxxx
SPOTIFY_CLIENT_SECRET = xxxxxxxxxxxxxxxxxxxxx
GOOGLE_SERVER_KEY = xxxxxxxxxxxxxxxxxxxxx
```
To get the Google server key, head to the [Google Cloud Platform website](https://console.cloud.google.com/), create a project and go to the APIs and Services page. Then Enable the `Youtube Data API V3`. You should be able to generate a server API key, which will be the value to put in your .env file.

Then, log in to the [Spotify Developer Console](https://developer.spotify.com/dashboard), and create a new app. Once created, you should get Client ID and Client Secret keys, which are the other two values for your `.env` file.

Then, just run the server with `npm start`.


If you are using auto deployments here are the following commands:

Build Command:

(We are unknown of the build command)

Start Command: 

`npm start `

Install Command:

`npm install`

Output directory:

(Don't put anything)


Make an [issue](https://github.com/alexwohlbruck/jukebox/issues) if you have problems with anything.
