import React from 'react';
import {Auth, Home} from '../screens/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../common/enums/enums';

const RootNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const isAuth = true;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Screen name={ScreenName.HOME} component={Home} />
      ) : (
        <Stack.Screen
          name={ScreenName.AUTH}
          component={Auth}
          initialParams={{formType: ScreenName.LOGIN}}
        />
      )}
    </Stack.Navigator>
  );
};

export {RootNavigation};
