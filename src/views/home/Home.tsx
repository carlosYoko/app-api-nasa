import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {format, sub} from 'date-fns';
import fetchApi from '../../utils/fetch';
import Header from '../../components/Header/Header';
import TodaysImage from '../../components/todaysImage/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import {TPostImage} from '../../types';

const Home = () => {
  const [todayImage, setTodayImage] = useState<TPostImage>();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<TPostImage[]>(
    [],
  );

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error(error);
        setTodayImage({});
      }
    };

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodayImage();
    loadLastFiveDaysImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todayImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7, 26, 93, 255)',
  },
});
export default Home;
