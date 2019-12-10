import React from 'react';
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
import ExerciseVideoScreen from '../screens/ExerciseVideoScreen';

const CarePlanStack = createStackNavigator({
    CarePlan: CarePlanScreen,
    DailyExercises: DailyExercisesScreen,
    CaregiverLog: CaregiverLogScreen,
    MyProgress: MyProgressScreen,
    ActivityLog: ActivityLogScreen,
    ExerciseVideo: ExerciseVideoScreen,
  },
);
const SchedulerStack = createStackNavigator({
    Scheduler: SchedulerScreen,
  },
);
const MailboxStack = createStackNavigator({
    Mailbox: MailboxScreen,
  },
);
const ResourcesStack = createStackNavigator({
    Resources: ResourcesScreen,
  },
);


CarePlanStack.navigationOptions = {
  tabBarLabel: 'CarePlan',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-egg'}/>
  ),
};
SchedulerStack.navigationOptions = {
  tabBarLabel: 'Scheduler',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-calendar'}/>
  ),
};
MailboxStack.navigationOptions = {
  tabBarLabel: 'Mailbox',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-mail'}/>
  ),
};
ResourcesStack.navigationOptions = {
  tabBarLabel: 'Resources',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-book'}/>
  ),
};

const tabNavigator = createBottomTabNavigator({
  // first screen is the default one
  CarePlanStack,
  SchedulerStack,
  MailboxStack,
  ResourcesStack,
});

tabNavigator.path = '';

export default tabNavigator;
