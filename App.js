import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';


const App = () => {
  const [numero, setNumero] = useState(10)

  function handleNumero(){
    const novo_numero = Math.floor(Math.random() * 100);
    setNumero(numero + novo_numero)
  }

  return (
  <SafeAreaView style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
      <Text onPress={handleNumero} style={styles.botao}>Gerar numero</Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  numero:{
    fontSize:38,
    color: '#FFFFFF',
    fontWeight:'bold',  
    alignItems: 'center',
    justifyContent:'center'  
    },
    botao:{
      backgroundColor: '#FFFFFF',
      width: '80%',
      paddingHorizontal:5,
      paddingVertical:10,
      borderRadius:5,
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10

      },

  

  });
  

export default App;
