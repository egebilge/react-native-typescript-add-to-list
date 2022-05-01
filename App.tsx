import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import Input from './input';
import {Fruit, Fruits} from './data';
import Item from './listItem';

const App: React.FC = () => {
  const [fruits, setFruits] = React.useState<Fruit[] | null>(null);
  const [newFruit, setNewFruit] = React.useState<Fruit | null>(null);
  const [inputShown, setInputShown] = React.useState<boolean>(false);

  React.useEffect(() => {
    (() => {
      setFruits(
        Fruits.sort((a: Fruit, b: Fruit) => {
          return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
        }),
      );
    })();
  }, []);

  const handleSearch = (text: string) => {
    const filteredFruits: Fruit[] = Fruits.filter(fruit =>
      fruit.name.includes(text),
    );
    setFruits(filteredFruits);
  };

  const handleAdd = () => {
    if (newFruit !== null && fruits !== null) {
      setFruits([...fruits, newFruit]);
    } else if (newFruit !== null && fruits == null) {
      setFruits([newFruit]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>App of Fruits</Text>
      <View style={styles.container}>
        <Input
          icon="search"
          placeholder="Search"
          onChangeText={text => handleSearch(text)}
        />
        <FlatList
          style={{marginVertical: 10}}
          data={fruits}
          renderItem={({item}) => (
            <Item id={item.id} name={item.name} price={item.price} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#33ff',
              padding: 10,
              paddingHorizontal: 10,
              borderRadius: 6,
              display: inputShown == false ? 'flex' : 'none',
            }}
            onPress={() => setInputShown(true)}>
            <Text style={{color: '#fff', fontWeight: '600'}}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: inputShown == true ? 'flex' : 'none'}}>
          <Input
            icon="plus-circle"
            placeholder="Fruit Name"
            onChangeText={text => {
              if (newFruit !== null) {
                setNewFruit({...newFruit, name: text});
              } else {
                setNewFruit({id: Date.now(), name: text, price: 0});
              }
            }}
          />
          <Input
            icon="plus-circle"
            placeholder="Fruit Price"
            onChangeText={text => {
              if (newFruit !== null) {
                setNewFruit({...newFruit, price: +text});
              } else {
                setNewFruit({id: Date.now(), name: '', price: +text});
              }
            }}
          />
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#33ff',
              padding: 10,
              paddingHorizontal: 10,
              borderRadius: 6,
            }}
            onPress={handleAdd}>
            <Text style={{color: '#fff', fontWeight: '600'}}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
