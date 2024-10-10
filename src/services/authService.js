// src/services/authService.js
export const login = (username, password) => {
    // Mock authentication logic
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('auth', JSON.stringify({ username, role: 'admin' }));
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('auth');
  };
  
  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('auth'));
  };
  