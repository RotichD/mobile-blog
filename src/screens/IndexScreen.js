import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

import BlogListItem from '../components/BlogListItem';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <BlogListItem
              deleteBlogPost={deleteBlogPost}
              item={item}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Ionicons name='create-outline' style={styles.icon} color='black' />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    marginRight: 10,
  },
});

export default IndexScreen;
