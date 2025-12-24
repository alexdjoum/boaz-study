import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'https://votre-serveur-keycloak.com/auth', 
  realm: 'votre-realm',                            
  clientId: '1',                     
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;