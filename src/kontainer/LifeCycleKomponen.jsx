import React, {Component} from 'react';

// Video #8
import './LifeCycleKomponen.css';

class LifeCycleKomponen extends Component{
    constructor(props){
        super(props) //ini diperlukan karena kita mengextends Component
        this.state = {
            hitung: 1
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(()=>{
            this.setState({
                hitung: 2
            })
        }, 3000)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('render')
        return(
            <button className="btn">Component Button {this.state.hitung}</button>
        )
    }
}
export default LifeCycleKomponen;
// end-Video #8