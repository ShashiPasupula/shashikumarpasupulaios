import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchUsers, resetState } from '../redux/slices/searchSlice';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (query.trim()) {
      await dispatch(resetState());
      dispatch(fetchUsers({ query, page: 1 }));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a user"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Submit" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default SearchComponent;
