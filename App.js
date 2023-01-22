import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreenn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            title: "All Categories",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }
        }>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>


      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
