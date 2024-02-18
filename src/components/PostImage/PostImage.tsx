import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TPostImage, TRouteStackParams} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type TPostImageNavitaionProps = NativeStackNavigationProp<
  TRouteStackParams,
  'Detalle'
>;

const PostImage: FC<TPostImage> = ({title, date, url, explanation}) => {
  const {navigate} = useNavigation<TPostImageNavitaionProps>();

  const handleViewPress = () => {
    navigate('Detalle', {title, date, url, explanation});
  };

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.roundedButton}>
          <Button title="Ver" color="#841584" onPress={handleViewPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#ffffff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  roundedButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default PostImage;
