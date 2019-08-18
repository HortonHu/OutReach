import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CarePlanScreen from '../screens/CarePlanScreen';
import DailyExercisesScreen from '../screens/DailyExercisesScreen';
import CaregiverLogScreen from '../screens/CaregiverLogScreen';
import MyProgressScreen from '../screens/MyProgressScreen';
import ActivityLogScreen from '../screens/ActivityLogScreen';
import SchedulerScreen from '../screens/SchedulerScreen';
import MailboxScreen from '../screens/MailboxScreen';
import ResourcesScreen from '../screens/ResourcesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


// CarePlan tab
const CarePlanStack = createStackNavigator(
  {
    CarePlan: CarePlanScreen,
    DailyExercises: DailyExercisesScreen,
    CaregiverLog: CaregiverLogScreen,
    MyProgress: MyProgressScreen,
    ActivityLog: ActivityLogScreen,

  },
  config,
  {
    initialRouteName: 'CarePlan',
  }
);

CarePlanStack.navigationOptions = {
  tabBarLabel: 'CarePlan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-egg'
      }
    />
  ),
};

CarePlanStack.path = '';


// Scheduler tab
const SchedulerStack = createStackNavigator(
  {
    Scheduler: SchedulerScreen,
  },
  config
);

SchedulerStack.navigationOptions = {
  tabBarLabel: 'Scheduler',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-calendar'} />
  ),
};

SchedulerStack.path = '';


// Mailbox tab
const MailboxStack = createStackNavigator(
  {
    Mailbox: MailboxScreen,
  },
  config
);

MailboxStack.navigationOptions = {
  tabBarLabel: 'Mailbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-mail'} />
  ),
};

MailboxStack.path = '';


// Resources tab
const ResourcesStack = createStackNavigator(
  {
    Resources: ResourcesScreen,
  },
  config
);

ResourcesStack.navigationOptions = {
  tabBarLabel: 'Resources',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-book'} />
  ),
};

ResourcesStack.path = '';


const tabNavigator = createBottomTabNavigator({
  CarePlanStack,
  SchedulerStack,
  MailboxStack,
  ResourcesStack,
});

tabNavigator.path = '';

export default tabNavigator;
