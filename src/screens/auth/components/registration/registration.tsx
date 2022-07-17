/* eslint-disable */

import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from '../../../../common/enums/enums';


const Registration: React.FC = () => {
  const navigation = useNavigation();

  const handleRegistrationPress = () => {
    // @ts-ignore
    navigation.setParams({ formType: ScreenName.HOME });
  }

  const handleLoginPress = () => {
    // @ts-ignore
    navigation.setParams({ formType: ScreenName.LOGIN });
  }

  return (
    <View >
      <TextInput />
      <TextInput />
      <TextInput />
      <Button title="Registration" onPress={handleRegistrationPress}/>
      <View>
        <Text>Have an account, Login </Text>
        <Text onPress={handleLoginPress}>
          Login
        </Text>
      </View>
    </View >
  );
};
export {Registration};
