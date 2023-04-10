class Box extends React.Component{
    state = {color: "black"};
    changeColor(color){
        this.setState({color:color});
    }
    render(){
        return(
        <div className ='box'>
        <h1 className = {this.state.color}> {this.props.heading} </h1>
        <p>This is heading . Which is created by React .</p>
        <button onClick = {()=>this.changeColor("red")}>Red</button>
        <button onClick = {()=>this.changeColor("yellow")}>Yellow</button>
        <button onClick = {()=>this.changeColor("blue")}>Blue</button>
        <button onClick = {()=>this.changeColor("green")}>Green</button>
    </div>
    );
  }
}


function App () {
    return(
       <div className = 'row'>
            <div className = 'col'>
            <Box heading = 'First' />
            </div>
            <div className = 'col'>
            <Box heading = 'Second' />
            </div>
            <div className = 'col'>
            <Box heading = 'Third' />
            </div>
            <div className = 'col'>
            <Box heading = 'Fourth' />
            </div>
            
            
       </div>
    );
}

ReactDOM.render(
    <App />,

    document.getElementById('react-container')
);