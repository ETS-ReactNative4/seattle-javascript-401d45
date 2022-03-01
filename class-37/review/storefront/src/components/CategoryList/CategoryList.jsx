import { connect } from 'react-redux';
import { toggleCategory } from '../../store/storeReducer.js';

function CategoryList(props) {

  return (
    <>
      <h2 data-testid="activeCategory">{props.activeCategory}</h2>
      {props.categories.map(category => {
        return <button onClick={() => props.toggleCategory(category)} key={category.normalizedName}>{category.displayName}</button>
      })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeCategory: state.activeCategory,
  }
}


const mapDispatchToProps = {
  toggleCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
