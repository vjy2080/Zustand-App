import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStore } from './UseStore';
import { styles } from './StackStyle';

const Stack1 = ({ navigation }) => {
  const count = useStore((state) => state.count)
  const increasePopulation = useStore((state) => state.increasePopulation)

  return (
    <View style={styles.mainView}>
      <Text style={styles.countText}>Stack1</Text>
      <Button
        title="Go to Stack 2"
        onPress={() => navigation.navigate('Stack2')}
      />
      <View style={styles.mainView}>
        <Text style={styles.countText}>
          {count}
        </Text>
        <Button
          title='one up'
          onPress={increasePopulation}
        />
        <Text style={styles.title}>Change Here and will reflect on stack5 screen</Text>
      </View>
    </View>
  );
}



export default Stack1;
