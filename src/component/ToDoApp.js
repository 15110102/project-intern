import React from 'react';
import {View, Text} from 'react-native';
class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = [
            {title: 'Lam Viec Nha', isComplete: false},
            {title: 'Hoc Bai', isComplete: false},
            {title: 'Sua Xe May', isComplete: false}
        ]
    }
    render(){
        return(
           <View>
               <Text>DDay la Component toDo</Text>
           </View>
        );
    }
}
export default ToDoApp;