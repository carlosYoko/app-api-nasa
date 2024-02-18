import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TPostImage, TRouteStackParams} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type TPostImageNavitaionProps = NativeStackNavigationProp<
  TRouteStackParams,
  'Detalle'
>;

const TodaysImage: FC<TPostImage> = ({date, title, url, explanation}) => {
  const {navigate} = useNavigation<TPostImageNavitaionProps>();
  const handleViewPress = () => {
    navigate('Detalle', {title, date, url, explanation});
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={url ? {uri: url} : require('../../assets/logo.png')}
          style={styles.images}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
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
    marginVertical: 16,
    borderRadius: 32,
    marginHorizontal: 24,
    padding: 16,
  },
  imageContainer: {},
  images: {
    width: '100%',
    borderRadius: 32,
    height: 190,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#ffffff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  roundedButton: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default TodaysImage;
