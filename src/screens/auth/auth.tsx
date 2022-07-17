/* eslint-disable */

import React from "react";
import {Login, Registration} from "./components/components";
import { Button, TextInput, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useRoute } from "@react-navigation/native";
import { ScreenName } from "../../common/enums/enums";


const Auth: React.FC = ()=>{

  const params: any = useRoute()

  const getForm = (type: any)=> {
    switch (type) {
      case ScreenName.LOGIN: {
        return <Login/>;
      }
      case ScreenName.REGISTRATION: {
        return <Registration/>;
      }
      default: {
        console.log('def');
        return null;
      }
    }
  };

  return (
    <SafeAreaView>
      {getForm(params.params.formType)}
    </SafeAreaView>
  )


}

export {Auth}
