import './App.css';

import React, {Component} from 'react';
import CustomButton from "./components/CustomButton";
import ClassExample from "./components/ClassExample";


class App extends Component {

    state={
        index:0,
        backgroundColor:'black'
    }
    componentDidMount(){

    }

    onClick=(backgroundColor,index)=>{
        this.setState({
            backgroundColor,
            index
        })
    }


    render() {

        return (
            <div style={{

                flexDirection:'column',
                display:"flex",flex:1,backgroundColor:'black',height:'100vh'}}>
              <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',flex:1,backgroundColor:'red'}}>
                  <CustomButton
                      title={"כפתור 1"}
                      onClick={()=>{
                          this.onClick("black",1)
                      }}/>
                  <CustomButton
                      title={"כפתור 2"}
                      onClick={()=>{
                          this.onClick("yellow",2)
                      }}/>
                  <CustomButton
                      title={"כפתור 2"}
                      onClick={()=>{
                          this.onClick("green",3)
                      }}/>

              </div>
                <div style={{flex:8,backgroundColor:'blue'}}>
                    <ClassExample
                        index={this.state.index}
                        style={{
                            display:"flex",
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            height:'100%',
                            backgroundColor:this.state.backgroundColor
                        }}
                        />

                </div>
            </div>
        );
    }

}

export default App;


