import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BlogListItem = ({ navigation, item, deleteBlogPost }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Show', { id: item.id })}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          {item.title} - {item.id}
        </Text>
        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
          <Feather color='black' name='trash-2' style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default BlogListItem;
