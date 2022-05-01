import {StyleSheet, Text, View, Dimensions} from 'react-native';
import * as React from 'react';
import {Fruit} from './data';

const {width} = Dimensions.get('screen');

const Item: React.FC<Fruit> = props => {
  return (
    <View style={styles.container}>
      <View style={{...styles.listItem, alignItems: 'flex-start'}}>
        <Text>{props.name}</Text>
      </View>
      <View style={{...styles.listItem, alignItems: 'flex-end'}}>
        <Text>{props.price}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width / 1.05,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    padding: 10,
  },
  listItem: {
    flex: 0.5,
    justifyContent: 'center',
  },
  item: {
    padding: 5,
    fontWeight: 600,
    fontSize: 16,
  },
});
