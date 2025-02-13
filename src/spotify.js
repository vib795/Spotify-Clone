// https://developer.spotify.com/documentation/web-playback-sdk/quick-start///#

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'https://localhost:3000/';
const clientId = '5529693564144e268eba7c26b285fbbc';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        // #accessToken = mysupersecretkey&name=utkarsh
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;