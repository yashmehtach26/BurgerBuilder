import React, {Component} from 'react';
import Aux from '../Auxilliary';
import Modal from '../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error:null
        }
        componentDidMount(){
            console.log("didmount");
            axios.interceptors.request.use(req => {
                this.setState({error:null})
            });
            axios.interceptors.response.use(null, error =>{
                console.log(error);
                this.setState({error:error})
            });
        }
        render(){
            let showModal = false;
            if(this.state.error){
                console.log(this.state.error);
                showModal = true;
            }
            return (
                <Aux>
                    <Modal show={showModal}>
                        {this.state.error}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}
export default withErrorHandler;