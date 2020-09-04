import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList';
import { fetchCategories } from '../redux/actions/categories';

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = {
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);