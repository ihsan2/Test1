import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

const data = [
  {
    id: 1,
    name: 'Usman',
    image1:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=8',
    image2:
      'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=',
    username: 'usman_syam',
    caption: 'Hai sayang!',
    like: '20.000',
  },
  {
    id: 2,
    name: 'Rahmat',
    image1:
      'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=',
    image2:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=8',
    username: 'rhmt',
    caption: 'Hai sayang!',
    like: '20.000',
  },
];

const App = () => {
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoad(true);
    axios
      .get('https://api.publicapis.org/entries')
      .then(res => {
        console.log('Suc', res.data);
        setDatas(res.data.entries);
        setLoad(false);
      })
      .catch(err => {
        console.log('Err', err.response.data);
        setLoad(false);
      });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        {load ? (
          <ActivityIndicator color={'blue'} />
        ) : (
          <View>
            {datas.map((item, key) => (
              <Card item={item} index={key} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  image2: {
    width: '100%',
    height: 320,
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  like: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 5,
  },
  content1: {
    fontWeight: 'normal',
  },
});

export default App;
