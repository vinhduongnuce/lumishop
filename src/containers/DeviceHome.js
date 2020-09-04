import { connect } from 'react-redux';
import { fetchHomeDevices } from '../redux/actions/devices';
import DeviceList from '../components/DeviceList';


const mapStateToProps = state => ({
  devices: state.devices.home
});

const mapDispatchToProps = {
  fetchDevices: fetchHomeDevices
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);