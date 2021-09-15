import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleTextChange = (text) => {
        setSearchTerm(text);
    }
    // Search after enter
    const onsubmit = () => {
        props.searchFromCategoryList(searchTerm);
    }
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Categories"
                onChangeText={handleTextChange}
                //search after enter
                onSubmitEditing={onsubmit}
            />
        </View>
    );
}
SearchBar.propTypes = {
    searchFromCategoryList: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        marginHorizontal: 12,
        borderWidth: 1,
    },
    searchBar: {
        padding: 15,
        fontSize: 15,
    }

});

export default SearchBar;