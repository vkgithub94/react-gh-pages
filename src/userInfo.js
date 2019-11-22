import React, { Component } from 'react';
import './userInfo.css';

const Data = { 
  billingAddress: {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  },
  shippingAddress: {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  },
  orderDate: null,
  expectedDelivery: null,
  products: [
    {
      id:null,
      name: '',
      qty: null,
      price: null,
      notes: ""
    }
  ]
 }

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      billingAddress: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
      },
      shippingAddress: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
      },
      orderDate: "",
      expectedDelivery: "",
      products: []
     }
  }

  componentDidMount() {
    this.setState({
      billingAddress: Data.billingAddress,
      shippingAddress: Data.shippingAddress,
      orderDate: Data.orderDate,
      expectedDelivery: Data.expectedDelivery,
      products: Data.products
    });
  }

  deleteProduct = (index) => {
    let products = this.state.products;
    if (products.length) {
      products.splice(index, 1);
      this.setState({products});
    }
    alert("Product will be deleted");
  }

  addProduct = () => {
    let obj = {
      id: null,
      name: "",
      qty: null,
      price: null,
      notes: ""
    };
    let products = this.state.products;
    products.push(obj);
    this.setState({products});
  }
  
  render() { 
    return ( 
      <div className="user-info">        
        <div className="address-card">
          <div className="billing w-100">
            <label className="title">Billing address</label>
            <div className="address-form">
              <div className="form-input">
                <div className="form-input">
                  <input type="text" placeholder="First Name" 
                  value={this.state.firstName}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.firstName = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                  </div>
                <div className="form-input">
                  <input type="text" placeholder="Last Name" 
                  value={this.state.lastName}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.lastName = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Address 1" 
                  value={this.state.address1}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.address1 = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Address 2" 
                  value={this.state.address2}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.address2 = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="City" 
                  value={this.state.city}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.city = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="State" 
                  value={this.state.state}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.state = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Zipcode" 
                  value={this.state.zipcode}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.zipcode = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Country" 
                  value={this.state.country}
                  onChange={(e) => {
                    let billingAddress = this.state.billingAddress;
                    billingAddress.country = e.target.value;
                    this.setState({billingAddress});
                  }}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="title">Order date</label>
              <div className="form-input">
                <input type="date" value={this.state.orderDate} 
                onChange={(e) => this.setState({orderDate: e.target.value})} 
                />
              </div>
            </div>
          </div>
          <div className="shipping w-100">
            <label className="title">Shipping address</label>
            <div className="address-form">
              <div className="form-input">
                <div className="form-input">
                  <input type="text" placeholder="First Name" 
                  value={this.state.firstName}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.firstName = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                  </div>
                <div className="form-input">
                  <input type="text" placeholder="Last Name" 
                  value={this.state.lastName}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.lastName = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Address 1" 
                  value={this.state.address1}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.address1 = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Address 2" 
                  value={this.state.address2}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.address2 = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="City" 
                  value={this.state.city}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.city = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="State" 
                  value={this.state.state}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.state = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Zipcode" 
                  value={this.state.zipcode}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.zipcode = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Country" 
                  value={this.state.country}
                  onChange={(e) => {
                    let shippingAddress = this.state.shippingAddress;
                    shippingAddress.country = e.target.value;
                    this.setState({shippingAddress});
                  }}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="title">Expected Delivery</label>
              <div className="form-input">
                <input type="date" value={this.state.expectedDelivery} 
                onChange={(e) => this.setState({expectedDelivery: e.target.value})} 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="products-card">
          <div className="products o-x-auto m-w-100">
            <table>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total Price</th>
                  <th>Notes</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.products.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <input type="number"
                      value={product.id}
                      onChange={(e) => {
                        let products = this.state.products;
                        products[index].id = e.target.value;
                        this.setState({products});
                      }}
                      />
                    </td>
                    <td>
                      <input type="text"
                      value={product.name}
                      onChange={(e) => {
                        let products = this.state.products;
                        products[index].name = e.target.value;
                        this.setState({products});
                      }}
                      />
                    </td>
                    <td>
                      <input type="number"
                      value={product.qty}
                      onChange={(e) => {
                        let products = this.state.products;
                        products[index].qty = e.target.value;
                        this.setState({products});
                      }}
                      />
                    </td>
                    <td>
                      <input type="number"
                      value={product.price}
                      onChange={(e) => {
                        let products = this.state.products;
                        products[index].price = e.target.value;
                        this.setState({products});
                      }}
                      />
                    </td>
                    <td>{product.qty * product.price}</td>
                    <td>
                      <input type="text"
                      value={product.notes}
                      onChange={(e) => {
                        let products = this.state.products;
                        products[index].notes = e.target.value;
                        this.setState({products});
                      }}
                      />
                    </td>
                    <td><button className="btn-delete btn-danger" 
                    onClick={(e) => this.deleteProduct(index)}>Delete</button></td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <div style={{textAlign: "left"}}>
            <button className="btn-add btn-primary" onClick={this.addProduct}>Add Product</button>
          </div>
          <div>
            <button className="btn-save btn-primary" onClick={() => console.log(this.state.products)} >Save</button>
          </div>
        </div>
      </div>
     );
  }
}
