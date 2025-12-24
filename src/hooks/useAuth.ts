import { useKeycloak } from '@react-keycloak/web';

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();

  return {
    isAuthenticated: keycloak.authenticated,
    isInitialized: initialized,
    user: keycloak.tokenParsed,
    token: keycloak.token,
    login: () => keycloak.login(),
    logout: () => keycloak.logout(),
    register: () => keycloak.register(),
    hasRole: (role: string) => keycloak.hasRealmRole(role) || keycloak.hasResourceRole(role),
    updateToken: () => keycloak.updateToken(70),
  };
};