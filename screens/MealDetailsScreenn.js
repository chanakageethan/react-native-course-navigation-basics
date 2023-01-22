import { Text, StyleSheet, View, Image } from 'react-native';
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';

function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => mealId);

    return <View>
        <Image source={{ uri: selectedMeal.imageUrl }} />

        <Text>{selectedMeal.title}</Text>


        <MealDetails
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
        />

        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient =>
            <Text key={ingredient}>{ingredient}</Text>)}
        <Text>Steps</Text>
        {selectedMeal.steps.map(step =>
            <Text key={step}>{step}</Text>)}
    </View>
}

export default MealDetailsScreen;



