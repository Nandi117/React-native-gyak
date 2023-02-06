import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
  <View>
    <Text style={styles.text}>hello</Text>
    <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to component demo"
    />
    <TouchableOpacity onPress={ () => navigation.navigate('List')}>
      <Text>Go to list demo</Text>
      <Text>Go to list demo</Text>
      <Text>Go to list demo</Text>
    </TouchableOpacity>
    <Button 
      onPress={() => navigation.navigate('Image')}
      title="Go to image demo"
    />
    <Button 
      onPress={() => navigation.navigate('Counter')}
      title="Go to counter demo"
    />
    <Button 
      onPress={() => navigation.navigate('Color')}
      title="Go to color demo"
    />
    <Button 
      onPress={() => navigation.navigate('Square')}
      title="Go to square demo"
    />
    <Button 
      onPress={() => navigation.navigate('Text')}
      title="Go to text demo"
    />
    <Button 
      onPress={() => navigation.navigate('Box')}
      title="Go to box demo"
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
