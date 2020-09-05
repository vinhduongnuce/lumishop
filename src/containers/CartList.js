import { connect } from 'react-redux';
import { addCart, getCart, updateCart, deleteCart } from '../redux/actions';
import CartList from '../components/CartList';

const mapStateToProps = state => ({
  carts: state.carts
});

const mapDispatchToProps = {
  addCart,
  getCart,
  updateCart,
  deleteCart
};


export default connect(mapStateToProps, mapDispatchToProps)(CartList);