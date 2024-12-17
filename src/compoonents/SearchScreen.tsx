// src/views/SearchScreen.tsx
import React from "react";
import { View } from "react-native";
import SearchComponent from "./SearchComponent";
import ResultsComponent from "./Results";

const SearchScreen = () => {
  return (
    <View>
      <SearchComponent />
      <ResultsComponent />
    </View>
  );
};

export default SearchScreen;
