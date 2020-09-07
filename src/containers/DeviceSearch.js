import { connect } from 'react-redux';
import { fetchDevicesSearch } from '../redux/actions/devices';
import DeviceList from '../components/DeviceList';


const mapStateToProps = state => ({
  devices: state.devices.resultsSearch
});

const mapDispatchToProps = {
  fetchDevices: fetchDevicesSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);