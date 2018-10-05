import React, { Component } from 'react';
import {StyleSheet,Text,View,PixelRatio,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from 'react-redux';
import * as Actions from '../actions/actionSignupPage'
import {bindActionCreators} from 'redux';

const userIcon = (<Icon name="user-o" size={30} color="#000" />)
const lockIcon = (<Icon1 name="lock" size={30} color="#000" />)
const circleimg = (<Icon2 name="circle-with-plus" size={30} color="#867" />)


class ImageDemo extends Component {
      constructor(props){
        super(props);
   
      
    this.state = {
      ImageSource: this.props.data.ImageSource,
      email : this.props.data.email,
      password : this.props.data.password,
      name : '',
      lname : '',
      data : this.props.data,
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
 
            ImageSource: source
 
          });
        }
      });
    }
    componentDidMount(){
    }    
    render() {
     const data = this.props.data;
       return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Siddhant Jaiswal
                </Text>
                <Text style={styles.text2}>
                Siddhant Jaiswal
                </Text>
                <Text style={styles.text3}>
                Siddhant Jaiswal
                </Text>
                <Text style={styles.text4}>
                Siddhant Jaiswal
                </Text>
        </View>
           
      );
    }
    createAccountpage(){
    const { navigate } = this.props.navigation;
    navigate('Signup');
  }
  logInUser(){
   
    if(this.props.data.email==this.state.email && this.state.password == this.props.data.password){
        //alert("valid user");
        const {navigate } = this.props.navigation;
        navigate('showUser');
    }
    else {
      alert("This is not a valid user detail");
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(ImageDemo);
  

const styles = StyleSheet.create({
 
    container: {
      backgroundColor : 'white',
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
      },
      text :{
        transform: [{ rotate: '-45deg' }],
        opacity : 1,
        fontSize : 50
      },
      text2 :{
        transform: [{ rotate: '-45deg' }],
        opacity : .7,
        fontSize : 50,
        marginTop : -55,
      },
      text3 :{
        transform: [{ rotate: '-45deg' }],
        opacity : .6,
        fontSize : 50,
        marginTop : -55,
      },
      text4 :{
        transform: [{ rotate: '-45deg' }],
        opacity : .4,
        fontSize : 50,
        marginTop : -55,
      }
  });
 