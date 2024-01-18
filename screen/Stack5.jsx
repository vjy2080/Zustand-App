import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStore } from './UseStore';
import { styles } from './StackStyle';


const Stack5 = ({ navigation }) => {

  const count = useStore((state) => state.count);

  return (
    <View style={styles.mainView}>
      <Text style={styles.countText}>Stack5</Text>
      <Button
        title="Go to Stack 1"
        onPress={() => navigation.navigate('Stack1')}
      />
      <View style={styles.mainView}>
        <Text style={styles.countText}>
          {count}
        </Text>
        <Text style={styles.title}>Change value from stack1 and will reflect here</Text>

      </View>
    </View>
  );
}


export default Stack5;
