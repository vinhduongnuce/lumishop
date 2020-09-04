import { connect } from 'react-redux';
import { fetchListDevices } from '../redux/actions/devices';
import DeviceList from '../components/DeviceList';


const mapStateToProps = state => ({
  devices: state.devices.list
});

const mapDispatchToProps = {
  fetchDevices: fetchListDevices
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);