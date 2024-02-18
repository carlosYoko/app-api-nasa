import React, {FC} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TPostImage} from '../../types';
import PostImage from '../PostImage';

const LastFiveDaysImages: FC<{postImages?: TPostImage[]}> = ({postImages}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos 5 dias</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;
