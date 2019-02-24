export const environment = {
  production: true,
  auth: {
    clientId: 'bd354c9b4bb14fa5b7661b038af27568',
    secret: '3b0541dc128c43ed8683ef88bd2d29e1',
    domain: 'https://accounts.spotify.com/authorize',
    redirect: 'http://mat-album-list.surge.sh/callback',
    responseType: 'token',
    scope: 'openid profile email'
  }
};
