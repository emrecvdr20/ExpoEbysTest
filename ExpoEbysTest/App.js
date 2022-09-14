import React from 'react';
import {View,Text,Image,TextInput,StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import FontAwosome from 'react-native-vector-icons/FontAwesome5';
import ToggleSwitch from 'toggle-switch-react-native'
const App = () => {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#2e843d" barStyle="default"></StatusBar>
      
      <View style={styles.header}>
        <Image source={require('./assets/ebys.jpeg')} style={styles.header_image}/>
      </View>
      
      <View style={styles.footer}>
        <View>

          <Text style={styles.text}>Giriş</Text>

          <View style={styles.textInput}>
            <FontAwosome name="globe" size={20} color="#2e843d" style={{marginLeft: 10, marginTop: 15}}/>
            <TextInput style={{marginLeft:7}} placeholder="Profil"/>
          </View>

          <View style={styles.textInput}>
            <FontAwosome name="user" size={20} color="#2e843d" style={{marginLeft: 10, marginTop: 15}}/>
            <TextInput style={{marginLeft:7}} placeholder="Kullanıcı Adı"/>
          </View>

          <View style={styles.textInput}>
            <FontAwosome name="lock" size={20} color="#2e843d" style={{marginLeft: 10, marginTop: 15}}/>
            <TextInput style={{marginLeft:7}} placeholder="Şifre" secureTextEntry={true} />
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.button_cont}>
              <Text style={styles.button_Text}>Giriş</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.end}>

            <View style={{marginRight: 20}}>
            <ToggleSwitch isOn={false}  offColor="#2e843d"  />
            
            </View>
            
            <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>

              <TouchableOpacity style={{borderWidth: 1,borderRadius: 30,height: 30,width: 80,marginLeft:170}}>
                <Text style={{textAlign:"center",marginTop:3 }}>Yardım</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e843d'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e843d',
    height: 200,
  },
  header_image: {
    height: 200,
    width: 180,
  },
  footer: {
    flex: 3,
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    paddingVertical: 30,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
  },
  textInput: {
    flexDirection: 'row',
    height: 50,
    width: 350,
    backgroundColor: '#e8e8e8',
    borderRadius: 20,
    marginTop: 15,
    
  },
  button: {
    marginTop: 20,
  },
  button_cont: {
    backgroundColor: '#f69f00',
    borderRadius: 20,
    height: 50,
    width: 350,
  },
  button_Text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
  },
  end: {
    flexDirection: 'row',
    marginTop: 20,
  },
});