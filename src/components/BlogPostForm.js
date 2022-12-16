import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title: </Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
        value={title}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        onChangeText={(content) => setContent(content)}
        style={styles.input}
        value={content}
      />
      <Button
        title='Save Blog Post'
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    backgroundColor: '#ced4da',
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default BlogPostForm;
