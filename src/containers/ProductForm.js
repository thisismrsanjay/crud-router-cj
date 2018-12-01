import React, { Component } from 'react';


class ProductForm extends Component {
    state = {
        product:  {
            title: '',
            description: '',
            price: '',
            quantity: 0,
            image: ''
        }
    }

    componentDidMount(){
        this.setState({
            product:this.props.product
        })
    }

    //what [name] does is it take name as name from name 
    valueChanged=(event)=>{
        const {name,value}= event.target
        this.setState((prevState)=>({
            product:{
                ...prevState.product,
                [name]:value
            }
        }))
    }
    validProduct = ()=>{
        const {product} = this.state;
        const hasTitle = product.title.trim() !== '';
        const hasDescription = product.description.trim() !== '';
        const hasPrice = !isNaN(product.price) && Number(product.price)>=0;
        const hasQuantity = !isNaN(product.quantity) && Number(product.quantity) >=0;
        const hasImage = product.image.trim() !== '';

        return hasTitle && hasDescription && hasPrice && hasQuantity && hasImage;
    }

    formSubmitted = (event)=>{
        event.preventDefault();
        if(this.validProduct()){
            this.props.onFormSubmitted(this.state.product);
        }
    }


    render() {
        const {product}  =this.state;
        return (
            <form onSubmit={this.formSubmitted}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={product.title} onChange={this.valueChanged} type="text" className="form-control" name="title"id="title" placeholder="Enter a title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea value={product.description} onChange={this.valueChanged}  className="form-control" id="description" name="description" placeholder="Enter a title" rows="3" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input value={product.price} onChange={this.valueChanged}  type="text" className="form-control" id="price" name="price" placeholder="Enter a price" required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">quantity</label>
                    <input value={product.quantity} onChange={this.valueChanged}  step="1" min="0" type="number" className="form-control" name="quantity"id="quantity" placeholder="Enter a quantity" required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input value={product.image} onChange={this.valueChanged}  type="url" className="form-control" id="image" name="image" placeholder="http://example.com/image.jpg" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}
export default ProductForm;