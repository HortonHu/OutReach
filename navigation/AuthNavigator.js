import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SignInScreen from "../screens/SignInScreen";

const AuthNavigator = createStackNavigator({SignIn: SignInScreen});

export default AuthNavigator;
