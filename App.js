import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const frases = [
    'A solidão é a sorte de todos os espíritos excepcionais.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
    'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
    'A perseverança é a mãe da boa sorte.',
    'A sorte favorece a mente bem preparada.',
    'Sorte é estar pronto quando a oportunidade vem.',
  ];

  const [img, setImg] = useState(require('./assets/biscoito.png'));
  
  const [frase, setFrase] = useState('');

  const quebrar = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setImg(require('./assets/biscoitoAberto.png'));
    setFrase(frases[numeroAleatorio]);
  }

  return (
    <View style={styles.container}>

      <Image 
        source={img}
        style={styles.img}
      />

      {frase != '' &&
        <Text style={styles.frase}>{' "' + frase + '" '}</Text>
      }

      <TouchableOpacity style={styles.btn} onPress={quebrar}>
        <Text style={styles.btnTexto}>Quebrar biscoito</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  img: {
    height: 250,
    width: 250
  },
  frase: {
    fontSize: 25,
    fontStyle: 'italic',
    marginHorizontal: 25,
    color: '#dd7b22'
  },
  btn: {
    height: 50,
    width: 150,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#dd7b22',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
