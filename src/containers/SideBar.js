import { connect } from 'react-redux';
import { changeLanguage } from '../redux/actions';
import Sidebar from '../components/SideBar';

const mapStateToProps = state => ({
  language: state.language.language
});

const mapDispatchToProps = {
  changeLanguage
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);