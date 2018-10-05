import React, { Component } from 'react';
import { ScrollView,StyleSheet,Text,View,PixelRatio,TouchableOpacity,Image,TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { createStackNavigator } from 'react-navigation';
import * as Actions from '../actions/actionSignupPage'
import {connect} from 'react-redux';

const userIcon = (<Icon name="user-o" size={30} color="#000" />)
const lockIcon = (<Icon1 name="lock" size={30} color="#000" />)
const circleimg = (<Icon2 name="plus"  size={30} color="#fff" />)


class Signup extends Component {
  constructor(props){
    super(props);
  
  

    this.state = {
      
      ImageSource: null,
      email : '',
      password : '',
      name : '',
      lname : '',
      gender : '',

    };
  }
    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
  
          this.setState({
 
            ImageSource: source,
            // email : '',
            // password : '',
            // name : '',
            // lname : '',
          });
        }
      });
    }
    render() {
      return (
        <ScrollView style={{flex : 1}}>
        <View style={styles.container}>
          <Text style = {styles.registration} >
            SIGNUP SCREEN
          </Text>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
              { this.state.ImageSource === null ? <Text></Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
              }
              <View style = {styles.imgPlus}>
              {circleimg}
                </View>
            </View>
          
            
          </TouchableOpacity>
            <Text style = 'styles.text1'></Text>
            <View style = {styles.inlineView}>
              <View style = {styles.viewfont}>
              {userIcon}
              </View>
              <TextInput
              style={styles.inputfield}
               onChangeText={(email) => this.setState({email})}
              placeholder='SomeUser@gmail.com'/>
            </View>
            <View style = {styles.inlineView}>
              <View style = {styles.viewfont}>
                {lockIcon}
              </View>
              <TextInput
                style={styles.inputfield}
                  onChangeText={(password) => this.setState({password})}
                placeholder='*********'
                secureTextEntry={true}/>
            </View>
            <View style = {styles.inlineView}>
              <View style = {styles.viewfont}>
              {userIcon}
              </View>
              <TextInput
                style={styles.inputfield }
                   onChangeText={(name) => this.setState({name})}
                placeholder='First Name'/>
            </View>
            <View style = {styles.inlineView}>
              <View style = {styles.viewfont}>
              {userIcon}
              </View>
              <TextInput
                style={styles.inputfield}
                 onChangeText={(lname) => this.setState({lname})}
                placeholder='Last Name'/>
            </View>
            <View>
            <RadioGroup 
            onSelect = {(index, value) => this.setState({gender: value})}
            style = {styles.radiobtnview} color='#00F1B8'>
              <RadioButton 
              value={'Male'} >
                <Text >Male</Text>
              </RadioButton>
              <RadioButton value={'Female'}>
                <Text>Female</Text>
              </RadioButton>
            </RadioGroup> 
            </View>
            <TouchableOpacity onPress={()=>this.createUser()}>
            <LinearGradient
          colors={['#00DBBE', '#00E6B4', '#00F8B4']}
          style={styles.LinearGradientstyle}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Create Account
          </Text>
        </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => this.alreadyUser()} >
        <Text style = {styles.signinbtn}>
                Already have an Account
            </Text>
        </TouchableOpacity>
        </View>  
        </ScrollView>
      );
    }
    createUser(){
      
     if(this.state.email=='' || this.state.lname=='' || 
     this.state.password=='' || this.state.name==''|| 
     this.state.gender=='' ){
      //|| this.state.ImageSource==null
       alert('empty Value Not allowed')
      }
     else{
      this.props.SignUpSave(this.state);
      const { navigate } = this.props.navigation;
      navigate('logIn');
     }
    }
   alreadyUser(){
      const { navigate } = this.props.navigation;
      navigate('logIn');
    }
  }
  
function mapDispatchToProps(dispatch) {

  return bindActionCreators(Actions, dispatch);
  
}
function mapStateToProps(state) {
    const ReducerSignupPage = state.ReducerSignupPage;  
  return {
         data :  ReducerSignupPage.data
         
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Signup);



  const styles = StyleSheet.create({
 
    container: {
     // flex: 1,
      alignItems: 'center',
      backgroundColor: '#FCFFFE'
      
    },
    registration : {
      marginTop : 30,
      fontSize : 23,
      marginBottom : 30,
    },
    ImageContainer: {
      borderRadius: 80,
      width: 160,
      height: 160,
      backgroundColor: '#00F1B8',
      borderColor: '#00F1B8',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DFEAE5',
      borderWidth : 12, 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .5,
      shadowRadius: 12, 
      
    },
    inputfield : {
      height: 45,
      width : 200,
      borderBottomColor: 'gray',
        borderBottomWidth: 1,
        
    },
    createAccount : {
        padding: 20,
        paddingLeft : 100,
        paddingRight : 100,
        marginTop : 40,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        color : 'white',
    },
    signinbtn : {
      marginTop : 30,
    },
    text1 : {
      marginTop : 30,
    },
    inlineView : {
      flexDirection : 'row',
      marginTop : 8,
    },
    viewfont : {
      marginTop : 10  ,
      marginRight : 4,
      },
      radiobtnview : {
        flexDirection : 'row',
        marginTop : 20,
      },
      LinearGradientstyle : { 
        padding: 15, 
        alignItems: 'center',
        paddingLeft : 80,
        paddingRight : 80,      
        marginTop : 40,  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
      },
      imgPlus : {
        position : 'absolute',
        top : 105,
        left :105,
        backgroundColor : '#00F1B8',
        borderRadius : 100,
        padding : 1, 
        
      },
  });
 