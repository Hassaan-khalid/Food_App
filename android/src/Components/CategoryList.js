import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';


const CategoryList = (props) => {
    return (
        <FlatList
            data={props.categories}

            renderItem={({ item }) => <CategoryItem category={item}
                setCurrentCategoryId={props.setCurrentCategoryId} />}
            keyExtractor={(item, index) => index.toString()}

        />
    );
}


CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    setCurrentCategoryId: PropTypes.func.isRequired,
}



export default CategoryList;