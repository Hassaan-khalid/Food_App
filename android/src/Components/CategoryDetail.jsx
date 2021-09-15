import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { getCategoriesMeals } from './ajax';
import { TouchableOpacity } from 'react-native';



const CategoryDetail = (props) => {
    const isCancelled = useRef(false);
    const [mealList, setmealList] = useState([]);

    // useEffect(async () => {
    //     const meals = await getCategoriesMeals(props.category.strCategory);

    //     setmealList(meals.meals)
    // }, []);
    useEffect(() => {

        (async () => {
            const meals = await getCategoriesMeals(props.category.strCategory);
            if (!isCancelled.current) setmealList(meals.meals)
        })();
    }, []);

    useEffect(() => {
        return () => (isCancelled.current = true);
    }, []);

    const handleBackPress = () => {
        props.setCurrentCategoryId(null);
    }

    return (
        <>
            <TouchableOpacity style={styles.backContainer} onPress={handleBackPress}>
                <Text style={styles.backText}>{"<- "}Back</Text>
            </TouchableOpacity>

            <ScrollView style={styles.container} >

                <Image source={{ uri: props.category.strCategoryThumb }}
                    style={styles.imageStyle} />
                <View style={styles.info}>
                    <Text style={styles.title}>{props.category.strCategory}</Text>
                    {/* Provide description of items */}
                    <ScrollView style={styles.descriptionContainer} nestedScrollEnabled>
                        <Text style={styles.description}>{props.category.strCategoryDescription}</Text>
                    </ScrollView>

                </View>
                {mealList && mealList.map((item, index) => {
                    return (
                        <View key={index} style={styles.mealItem}>
                            <Image source={{ uri: item.strMealThumb }}
                                style={styles.mealImage} />
                            <Text style={styles.mealName}>{item.strMeal}</Text>
                        </View>
                    );


                })}
            </ScrollView>
        </>
    );

}
CategoryDetail.propTypes = {
    category: PropTypes.object.isRequired,
    setCurrentCategoryId: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginVertical: 12,
    },
    imageStyle: {
        height: 250,
        width: '100%',
        backgroundColor: '#ddd',
    },
    info: {
        borderWidth: 1,
        borderTopWidth: 0,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        paddingTop: 12,
    },
    descriptionContainer: {
        height: 250,
    },
    description: {
        padding: 15,
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 1.2,
    },
    mealItem: {
        marginTop: 12,
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#bbb',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mealName: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 15,
        width: 200,
    },
    mealImage: {
        height: 100,
        width: 100,
    },
    backContainer: {
        marginTop: 15,
        marginLeft: 15,
    },
    backText: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
    }

})

export default CategoryDetail;