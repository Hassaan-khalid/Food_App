const hostUrl = 'https://www.themealdb.com/api/json/v1/1/';


export const getAllCategories = async () => {
    try {

        const response = await fetch(hostUrl + 'categories.php');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);

    }
};


export const getCategoriesMeals = async (category) => {
    try {

        const response = await fetch(hostUrl + 'filter.php?c=' + category);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);

    }
};
