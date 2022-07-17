/* eslint-disable */

import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from '../../../../common/enums/enums';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    // @ts-ignore
    navigation.setParams({ formType: ScreenName.REGISTRATION });
  }

  return (
    <View>
      <TextInput />
      <TextInput />
      <Button title="Login" />
      <View>
        <Text>Don’t have an account? </Text>
        <Text onPress={handleSignUpPress}>
          Sign up
        </Text>
      </View>
    </View>
  );
};
export {Login};
