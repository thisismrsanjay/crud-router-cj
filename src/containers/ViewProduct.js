import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {getProduct} from '../API';
import {deleteProduct} from '../API';
import Product from '../components/Product';

class ViewProduct extends Component {
    state = {
        isLoading: true,
        product: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        getProduct(id)
            .then(product => {
                this.setState({
                    product,
                    isLoading: false
                })

            })

    }
    deleteProduct=()=>{
        deleteProduct(this.state.product.id)
            .then(()=>{
                this.props.history.push('/products');
            })
    }

    render() {

        return (
            this.state.isLoading ?
                <h2>Loading Product...</h2> :
                <Product deleteProduct={this.deleteProduct} product={this.state.product} cols="col-12" showStock={true} showEdit={true}/>
            
        )
    }
}

export default withRouter(ViewProduct);