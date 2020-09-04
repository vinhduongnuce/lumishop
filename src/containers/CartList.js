import { connect } from 'react-redux';
import { getDetailDevice } from '../redux/actions';
import CartList from '../components/CartList';


const mapStateToProps = state => ({
  carts: state.carts
});

const mapDispatchToProps = {
  getDetailDevice
};


export default connect(mapStateToProps, mapDispatchToProps)(CartList);