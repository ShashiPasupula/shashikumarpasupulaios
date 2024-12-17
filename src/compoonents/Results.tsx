// src/components/ResultsComponent.tsx
import React from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/searchSlice";
import { RootState } from "../redux/store";

const ResultsComponent = () => {
  const { users, isLoading, query, page } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  console.log('users: ', users);
  const loadMore = () => {
    if (!isLoading) {
      dispatch(fetchUsers({ query, page }));
    }
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
          <Text style={styles.text}>{item.login}</Text>
          <Text style={styles.text}>{item.type}</Text>
        </View>
      )}
      ListFooterComponent={isLoading ? <ActivityIndicator size="large" /> : null}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", padding: 16, alignItems: "center", backgroundColor: '#FFFFFF' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 16 },
  text: { fontSize: 16 },
});

export default ResultsComponent;
