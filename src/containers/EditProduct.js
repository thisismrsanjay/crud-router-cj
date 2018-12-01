import React ,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { getProduct } from '../API'; 
import { updateProduct } from '../API'; 

import ProductForm from './ProductForm';

class EditProduct extends Component{
    state = {
        isLoading :true,
        product:{},
        isEditing:false
    };
    componentDidMount(){
        const {id} = this.props.match.params;
        getProduct(id)
            .then(product=>{
                this.setState({
                    product,
                    isLoading:false
                })
            })
    }
    updateProduct=(product)=>{
        this.setState({
            isEditing:true
        })
        updateProduct(product.id,product)
            .then(()=>{
                this.props.history.push(`/products/${product.id}`)
            })
    }

    render(){
        return this.state.isLoading ? <h2>Loading...</h2>:
        this.state.isEditing ? <h2>Editing...</h2>:
        <ProductForm onFormSubmitted={this.updateProduct}  product={this.state.product} />
    }
}
export default withRouter(EditProduct);