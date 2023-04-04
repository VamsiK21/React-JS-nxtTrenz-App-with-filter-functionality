import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    changeSearchInput,
    clearAllFilters,
  } = props

  const renderRatingFiltersList = eachItem => {
    const {changeRatingId, activeRatingId} = props

    const ratingClassName =
      eachItem.ratingId === activeRatingId ? 'and-up active-rating' : 'and-up'

    const onClickRatingItem = () => changeRatingId(eachItem.ratingId)

    return (
      <li
        className="rating-item"
        key={eachItem.ratingId}
        onClick={onClickRatingItem}
      >
        <img
          src={eachItem.imageUrl}
          className="rating-img"
          alt={`rating ${eachItem.ratingId}`}
        />
        <p className={ratingClassName}>& up</p>
      </li>
    )
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">
        {ratingsList.map(eachItem => renderRatingFiltersList(eachItem))}
      </ul>
    </div>
  )

  const renderCategoriesList = eachItem => {
    const {changeCategory, activeCategoryId} = props

    const isActive = eachItem.categoryId === activeCategoryId
    const categoryClassName = isActive
      ? 'category-name active-category-name'
      : 'category-name'

    const onClickCategoryItem = () => changeCategory(eachItem.categoryId)

    return (
      <li
        className="category-item"
        key={eachItem.categoryId}
        onClick={onClickCategoryItem}
      >
        <p className={categoryClassName}>{eachItem.name}</p>
      </li>
    )
  }

  const renderProductsCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list-container">
        {categoryOptions.map(eachItem => renderCategoriesList(eachItem))}
      </ul>
    </>
  )

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        value={searchInput}
        className="search-input"
        type="search"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const onClickClearFilter = () => clearAllFilters()

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductsCategories()}
      {renderRatingsFilters()}

      <button
        className="clear-filters-btn"
        type="button"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
