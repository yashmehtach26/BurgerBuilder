import React, {Component} from 'react';
import axios from '../../axios-order';
import Order  from './Order/Order';
import Spinner from '../../UI/Spinner/Spinner';

class  Orders extends Component{
    state={
        orders:[],
        spinner:false
    }
    componentDidMount(){
        //console.log("orders:mount")
        this.setState({spinner:true});
        axios.get('/orders.json').then(
            (response) => {
                let ordersArray = [];
                for(let key in response.data){
                    ordersArray.push({...response.data[key],id:key})
                }
                this.setState({orders:ordersArray,
                                spinner:false});
                
            }
        )
    }


    render(){
        //console.log("orders:render");
        let o = (<Spinner />);
        if(!this.state.spinner){
            //console.log("spinner")
            o=(this.state.orders.map(
                (order) => {
                    return <Order order={order} key={order.id}/>
                }
            ));
        }
        //console.log(this.state.orders);
        return(
            <div>
                {o}
            </div>
        );
    }
}

export default Orders;