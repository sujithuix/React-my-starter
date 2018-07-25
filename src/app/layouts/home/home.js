import React, { Component } from "react";


class HomeComponent extends React.Component {

    render() {
        return (
            <div className="yi-container">

                <div className="yi-row">
                    <h1>Build React Applications Quicker</h1>
                </div>
                <MyComponent />
                <Statecomponent />
                <Technology />
            </div>
            
        )
    }
}

class MyComponent extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Hello React</h1>
      )
    }
  }

class Statecomponent extends React.Component{
    constructor(props){
      super(props)
        this.state = {
             header: "Header from state",
             content: "Content from state"
        }
    }
    render(){
      return(
        <div>
        <Header headerProp={this.state.header} />
        <Content contentProp={this.state.content}/>
        </div>
      )
    }
  }


class Header extends React.Component{
    render(){
        return(
            <h1>{this.props.headerProp}</h1>
        )
    }
}
class Content extends React.Component{
    render(){
        return(
            <h1>{this.props.contentProp}</h1>
        )
    }
}


class Technology extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div>
                <Javascript technology="Javascript">
                  
                  
                
                </Javascript>
            </div>
        )
    }
}

const Javascript = (props) => {
  return(
  <div>
  <p>Primary Technolgy is {props.technology}</p>
  <p>{props.technology} is a front-end language</p>
  </div>
  )
}

export default HomeComponent;