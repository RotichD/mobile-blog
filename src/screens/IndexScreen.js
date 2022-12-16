import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

import BlogListItem from '../components/BlogListItem';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
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

const styles = StyleSheet.create({});

export default IndexScreen;
