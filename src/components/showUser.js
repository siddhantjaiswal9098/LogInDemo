import React, { Component } from 'react';
import {StyleSheet,Text,View,PixelRatio,TouchableOpacity,Image,TextInput} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actionSignupPage'

class showUser extends Component{
    constructor(props){
        super(props);
        this.state = {
           // ImageSource: this.props.data.ImageSource,
        }
    }
    
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                this.jaduWaliMethod()
            }}>
            <Text style= {styles.textprops}>
                User Details... 
            </Text>
            </TouchableOpacity>
            <Image style= {{height : 200,width : 200}} source={this.props.data.ImageSource} />
            <Text style= {styles.textprops}>
                User Full Name : {this.props.data.name} {this.props.data.lname}
            </Text>
            <Text style= {styles.textprops}>
                User Email : {this.props.data.email}
            </Text> 
            <Text style= {styles.textprops}>
                Gender : {this.props.data.gender}
            </Text>
        </View>
    );
  }
    jaduWaliMethod(){
        const { navigate } = this.props.navigation;
        navigate('ImageDemo');
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
  export default connect(mapStateToProps, mapDispatchToProps)(showUser);




  styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        // justifyContent : 'center',
    },
    textprops : {
        fontSize : 20,
    }
  });