
import { useLayoutEffect } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => mealId);

    function headerButtonPressHandler() {
        console.log('Pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                onPress = {headerButtonPressHandler}
                icon='star'
                color='white'
                />
            }
        });
    }, [navigation, headerButtonPressHandler]);


    return <ScrollView style={styles.rootContainer}>
        <Image
            style={styles.image}
            source={{ uri: selectedMeal.imageUrl }}
        />

        <Text style={styles.title}>{selectedMeal.title}</Text>


        <MealDetails
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
            textStyle={styles.detailText}
        />


        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredient</SubTitle>
                <List data={selectedMeal.ingredients} />

                <SubTitle>Steps</SubTitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>


    </ScrollView>
}

export default MealDetailsScreen;


const styles = StyleSheet.create({

    rootContainer: {
        marginBottom: 32
    },

    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },

    detailText: {
        color: 'white',
    },

    listOuterContainer: {
        alignItems: 'center',
    },

    listContainer: {
        width: "80%",
    },


});



