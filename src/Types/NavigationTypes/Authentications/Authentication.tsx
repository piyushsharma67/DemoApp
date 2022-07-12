import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type AuthenticationStackParamList={
    Signup:undefined,
    Login:undefined
}

export type SignUpScreenProps = NativeStackScreenProps<
    AuthenticationStackParamList,
    'Signup'
>;
