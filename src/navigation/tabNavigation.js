import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Trending from "../screens/Home/Trending/trending";
import Browse from "../screens/Home/Browse/browse";
import Feeds from "../screens/Home/Feeds/feeds";
import Offers from "../screens/Home/Offers/offers";
import R from "../res/R";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: R.colors.black,
            tabBarInactiveTintColor: R.colors.darkGray,
            tabBarLabelStyle: {
                fontSize: 15,
                marginBottom: 10,
            },
        })}>
            <Tab.Screen name="Trending" component={Trending}
                options={{
                    headerShown: false,
                    tabBarLabel: "Trending",
                    tabBarIconStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="Browse" component={Browse}
                options={{
                    headerShown: false,
                    tabBarLabel: "Browse",
                    tabBarIconStyle: { display: 'none' },
                }} />
            <Tab.Screen name="Feeds" component={Feeds}
                options={{
                    headerShown: false,
                    tabBarLabel: "Feeds",
                    tabBarIconStyle: { display: 'none' }
                }} />
            <Tab.Screen name="Offers" component={Offers}
                options={{
                    headerShown: false,
                    tabBarLabel: "Offers",
                    tabBarIconStyle: { display: 'none' }
                    // tabBarIcon: ({ color, size }) => (
                    //   <Icon name="file" color={color} size={size} />
                    // ),
                }} />

        </Tab.Navigator>
    );
};
