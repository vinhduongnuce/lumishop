import { connect } from 'react-redux';
import DeviceDetail from '../components/DeviceDetail';
import { fetchDetailDevices } from '../redux/actions/devices';

const mapStateToProps = state => ({
  device: state.devices.resultDetail
});

const mapDispatchToProps = {
  fetchDetailDevices
};


export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail);