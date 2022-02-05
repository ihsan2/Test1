import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';

const Card = ({item, index}) => {
  return (
    <TouchableOpacity key={index} style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=8',
          }}
          style={styles.image}
        />
        <Text style={styles.text}>{item?.API}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=',
          }}
          style={styles.image2}
        />
      </View>
      <View>
        <Text style={styles.like}>30.000 Suka</Text>
      </View>
      <View>
        <Text style={styles.content}>
          {item?.API} <Text style={styles.content1}>{item?.Description}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
