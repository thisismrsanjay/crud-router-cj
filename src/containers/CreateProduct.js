import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import ProductForm from './ProductForm';
import {createProduct} from '../API';

class CreateProduct extends Component {
    state = {
        product: {
            title: '',
            description: '',
            price: '',
            quantity: 0,
            image: ''
        },
        creating: false
    }

    createProduct = (product)=>{
        console.log('in create product',product);
        this.setState({
            creating:true
        })
        product.quantity = Number(product.quantity);
        createProduct(product)
            .then(result=>{
              //console.log('after fetch',result);
              //console.log(this.props);
              this.props.history.push(`/products/${result.id}`)   
            })
    }

    render() {
        return (
            <div>
                <h1>Create a Product</h1>
                <ProductForm onFormSubmitted={this.createProduct} product={this.state.product}/>
            </div>)
    }

}
export default withRouter(CreateProduct);