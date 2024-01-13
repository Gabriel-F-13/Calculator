import { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import { styles } from './src/styles';
import  Icon from "react-native-vector-icons/AntDesign";
import  Icon2 from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';

//Variável global para definir o tipo da operação matemática
var numOp = 0;

export default function App() {

  const [result, setResult] = useState('');
  const [sinal, setSinal] = useState(true);
  const [prev, setPrev] = useState('');

  //Verificação caso result for undefined definí-lo
  if(result == undefined) {
    setResult('');
  }

  //Novo valor após deletar o último índice
  let resultNew = '';
  
  /* Arrow function que deleta num anterior passando para uma string o novo valor
  sem o último elemento e caso não haja mais num deleta o prev */
  const deleteNum = () => {
    for ( let i = 0; i < result.length - 1; i++) {
      resultNew += result[i];
    }
    if(result === '') {
      setPrev('');
    }
    return resultNew;   
  }
  
  //Alterar o num para positivo ou negativo
  const alterSignal = () => {
    if(result === '-') {
      setResult('');
      return result;
    }
    else if (sinal === true) { 
      let numN = result * - 1;
      setResult(numN);
      setSinal(false);
      return String(numN);
    } else {
      let numP = result * 1;
      setResult(numP);
      setSinal(true);
      return String(numP);
    }
  }
  
  //Funções de cada operação matemática inclusa nesta calculadora
  
  // 1 = Divisão; 2 = Multiplicação; 3 = Soma; 4 = Subtração  

  function div() {
    setPrev(result);
    numOp = 1;
  }
  
  function mult() {
    setPrev(result);
    numOp = 2;
  }

  function add() {
    setPrev(result);
    numOp = 3;
  }

  function sub() {
    setPrev(result);
    numOp = 4;
  }

  function resultDiv() {
    let Op = Number(prev) / Number(result);
    setResult(Op);
    return Op;
  }

  function resultMult() {
    let Op = Number(prev) * Number(result);
    setResult(Op);
    return Op;
  }

  function resultAdd() {
    let Op = Number(prev) + Number(result);
    setResult(Op); 
    return Op;
  }

  function resultSub() {
    let Op = Number(prev) - Number(result);
    setResult(Op);
    return Op;
  }

  function resultOperation() {
    switch(numOp) {
      case 1: return resultDiv(); 
      break;

      case 2: return resultMult();  
      break;

      case 3: return resultAdd();  
      break;

      case 4: return resultSub();
      break;

      default: return;
    }
  }

  return (
  <SafeAreaView style={styles.container}>
    <LinearGradient 
      style={styles.container}
	    start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
	    colors={['#833ab4','#22c1c3']}>
     
      <View style={styles.areaNumbersView}>
        <View style={styles.areaResult}>
         <Text style={styles.textNumbers}>{result}</Text>
        </View>
      
        <View style={styles.areaPrev}>
         <Text style={styles.textNumbersPrev}>{prev}</Text>
        </View>
      </View>
      
      <View style={styles.containerButtons}>
        <View style={styles.areaButtons}>
          <TouchableOpacity style={styles.buttons}
           onPress={() => setResult('')}
          >
            <Icon name="delete" size={30} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(deleteNum())}
          >
            <Icon2 name="delete" size={30} color="#000" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '9')}
          >
            <Text style={styles.buttonsIcon} > 9 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '8')}
          >
            <Text style={styles.buttonsIcon}> 8 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} 
            onPress={() => setResult(result + '7')}
          >
            <Text style={styles.buttonsIcon}> 7 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '6')}
          >
            <Text style={styles.buttonsIcon}> 6 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '5')}
          >
            <Text style={styles.buttonsIcon}> 5 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '4')}
          >
            <Text style={styles.buttonsIcon}> 4 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '3')}
          >
            <Text style={styles.buttonsIcon}> 3 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '2')}
          >
            <Text style={styles.buttonsIcon}> 2 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '1')}
          >
            <Text style={styles.buttonsIcon}> 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '0')}
          >
            <Text style={styles.buttonsIcon}> 0 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(result + '.')}
          >
            <Text style={styles.buttonsIcon}> . </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}
            onPress={() => setResult(alterSignal())}
          >
            <Text style={styles.buttonsIcon}> +/- </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaButtons2}>
          <TouchableOpacity style={[styles.buttons2, {marginTop: 15}]}
            onPress={() => setResult(div())}
          >
            <Text style={styles.buttonsIcon2}> / </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttons2, {marginTop: 30}]}
            onPress={() => setResult(mult())}
          >
            <Text style={styles.buttonsIcon2}> * </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttons2, {marginTop: 30}]}
            onPress={() => setResult(add())}
          >
            <Text style={styles.buttonsIcon2}> + </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttons2, {marginTop: 30}]}
            onPress={() => setResult(sub())}
          >
            <Text style={styles.buttonsIcon2}> - </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttons2, {marginTop: 30}]}
            onPress={() => setResult(resultOperation())}
          >
            <Text style={styles.buttonsIcon2}> = </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  </SafeAreaView>
  );
}