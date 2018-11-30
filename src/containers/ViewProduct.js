import React, { Component } from 'react';
import {getProduct} from '../API';
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

    render() {

        return (
            this.state.isLoading ?
                <h2>Loading Product...</h2> :
                <Product product={this.state.product} cols="col-12" showStock={true} showEdit={true}/>
            
        )
    }
}

export default ViewProduct;