// import { Card } from 'react-bootstrap/Card';
// import Store
// import { Button } from 'react-bootstrap/Button';
// import Row
// import Column
// import data from data.js?

// good but aslo psuedocode filesnames

import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';

export default function CartScreen() {
  // link from product screen to call CartScreen (also from nav icon?)
  // create routes in app for cartscreen

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    // cols then rows
    // card
    // photo /with card?    (from????)
    // link
    // item name
    // button subtract from cart
    // (need to make a function to match just like add-to-cart)
    // render total quantity of the item
    // button add to cart (use already written function)
    // render price of product
    // button remove item from store

    // new card row for ea item in cart. use map

    // second card on next row (maybe 4/12ths? of col    using bootstrap___)
    // render number of items(same as red dot on top of screen)
    // render total price of all of them
    // button "proceed to checkout" (take up all of width)

    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>

      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {' '}
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button variant="light" disabled={item.quantity === 1}>
                        {/* onClick={minusCartItem} */}
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <Button variant="light">
                        <i className="fas fa-trash"></i>
                      </Button>{' '}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
