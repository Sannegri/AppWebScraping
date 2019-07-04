import React, { Component } from 'react';

import {
    Table,
    Alert
} from 'reactstrap';



export default class ProductBox extends Component {

    Url = 'http://localhost/Desafio.json';

    state = {
        products: [

        ]
    }



    componentDidMount() {
        fetch(this.Url)
            .then(response => response.json())
            .then((products) => this.setState({ products }))
            .catch(e => console.log(e))
    }

    render() {

        console.log(this.state.products[0]);

        return (

            <div>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <h2 className="font-weight-bold text-center">Produtos </h2>
                        <ListProduct products={this.state.products} />
                    </div>
                </div>
            </div>
        );
    }
}

class ListProduct extends Component {

    render() {
        const { products } = this.props;
        console.log(products);

        return (
            <Table className="table-bordered text-center">
                <thead className="thead-dark">
                <tr>
                    <th>Nome do Produto, Preço, Link Img URL</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map(product => (
                        <tr>
                            <td>{product}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        );
    }
}
