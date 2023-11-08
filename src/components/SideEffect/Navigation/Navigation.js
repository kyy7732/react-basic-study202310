import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

const Navigation = ({ onLogout }) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        // provider가 value -> isLoggedIn을 Consumer에 주고 context에 담김
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href='/'>Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href='/'>Admin</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
