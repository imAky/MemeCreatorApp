import {Text, View, StyleSheet} from 'react-native';


export default function AboutScren(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
        </View>
    )
};




const styles = StyleSheet.create({
    container:{
      flex: 1,
    backgroundColor: '#25292e',
    alignContent: 'center',
    alignItems: 'center',
    },
    text: {
        color: '#fff',
    }
})