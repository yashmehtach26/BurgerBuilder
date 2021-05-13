import React, {Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component{
    
    state={
        showSidebar:false
    }

    showSidebarHandler = () => {
        this.setState({showSidebar:!this.state.showSidebar});
    }
    render(){
        //console.log(this.state.showSidebar);
        return (
            <Aux>
                <Toolbar handle={this.showSidebarHandler}/>
                <Sidebar show={this.state.showSidebar} handle={this.showSidebarHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
};

export default Layout; 