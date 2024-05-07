import React from 'react';
import {View, StyleSheet} from 'react-native';
import Box from '../components/Box';


function Main({navigation}) {

  return(
    <>
      <View style={styles.container}>
        <Box page="Rastreamento" navigation={navigation} icon="search"/>
        <Box page="Salvos" icon="save" navigation={navigation} />
      </View>
     
    </>
  )
}
const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  container: {
    flex:1,
    backgroundColor:'#ffeaa7',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default Main;