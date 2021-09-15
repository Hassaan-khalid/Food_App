import React from 'react';
import { Text, Image, StyleSheet, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CategoryItem = (props) => {
    const handleCategoryPress = () => {
        props.setCurrentCategoryId(props.category.idCategory);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleCategoryPress}>
            <Image source={{ uri: props.category.strCategoryThumb }}
                style={styles.imageStyle} />
            <View style={styles.info}>
                <Text style={styles.title}>{props.category.strCategory}</Text>
            </View>

        </TouchableOpacity>
    );

}
CategoryItem.propTypes = {
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
        paddingBottom: 12,
        paddingTop: 12,
    }
})

export default CategoryItem;