import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";


export type AuthenticatedBottomTabParamList={
    Home:undefined,
    Search:undefined,
    Profile:undefined,
    Loan:undefined
}

export type HomeScreen = BottomTabScreenProps<
    AuthenticatedBottomTabParamList,
    'Home'
>;

export type ProfileScreen = BottomTabScreenProps<
    AuthenticatedBottomTabParamList,
    'Profile'
>;
export type SearchScreen = BottomTabScreenProps<
    AuthenticatedBottomTabParamList,
    'Search'
>;
export type LoanScreen = BottomTabScreenProps<
    AuthenticatedBottomTabParamList,
    'Loan'
>;
