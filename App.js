import React, { useState, useEffect } from 'react';
import { getAllCategories } from './android/src/Components/ajax';
import SplashScreen from './android/src/Components/SplashScreen';
import CategoryList from './android/src/Components/CategoryList';
import CategoryDetail from './android/src/Components/CategoryDetail';
import SearchBar from './android/src/Components/SearchBar';

const App = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  // To enter without type any word , return whole list of food
  const [searchedCategories, setSearchedCategories] = useState([]);

  useEffect(async () => {
    const categories = await getAllCategories();
    setCategoryList(categories.categories);


  }, []);

  const findCategory = () => {
    return categoryList.find(item => item.idCategory === currentCategoryId)
  }

  const searchFromCategoryList = (searchTerm) => {
    const searchedList = categoryList.filter(item => item.strCategory.toString().toLowerCase() === searchTerm.toString().toLowerCase());
    setSearchedCategories(searchedList);
  }
  return (
    <>
      {currentCategoryId ? <CategoryDetail category={findCategory()} setCurrentCategoryId={setCurrentCategoryId} />
        : categoryList.length > 0
          ?
          <>
            <SearchBar searchFromCategoryList={searchFromCategoryList} />
            {/* here is the if else condition for empty search  */}
            <CategoryList categories={searchedCategories.length > 0 ? searchedCategories : categoryList} setCurrentCategoryId={setCurrentCategoryId} />
          </>
          : <SplashScreen />
      }
    </>

  );
}
export default App;