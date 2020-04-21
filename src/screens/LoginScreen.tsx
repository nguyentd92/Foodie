import React, {useState} from 'react'
import { View, Text } from 'react-native'

export function LoginScreen() {
 const [isLogin, setIsLogin] = useState(false);

 return (
     <View>
         <Text>Login Screen</Text>
    </View>
 )
}