import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList={
    Authentication:undefined,
    Authenticated:undefined
}

export type AuthenticationScreenProps = NativeStackScreenProps<
    RootStackParamList,
  'Authentication'
>;