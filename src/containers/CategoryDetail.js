import { connect } from 'react-redux';
import DeviceList from '../components/DeviceList';
import { fetchDevicesByCategory } from '../redux/actions/devices';

const mapStateToProps = state => ({
  devices: state.devices.resultsSearch
});

const mapDispatchToProps = {
  fetchDevices: fetchDevicesByCategory
};


export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);