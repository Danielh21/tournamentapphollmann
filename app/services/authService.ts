import { getAuth } from "firebase/auth"

class AuthService {
  logOut() {
    const auth = getAuth()
    auth.signOut()
  }
}

// Singleton instance of the Authservice for convenience
export const authService = new AuthService()
