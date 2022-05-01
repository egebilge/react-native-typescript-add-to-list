import * as React from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('screen');

interface Props {
  icon: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <FontAwesome5
          style={{padding: 5, position: 'absolute', top: 0}}
          name={props.icon}
          size={22}
          color="#555"
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput
          style={{paddingLeft: 32}}
          placeholderTextColor="#555"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: width / 1.05,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    margin: 10,
    opacity: 0.4,
  },
});
