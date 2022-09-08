import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTableId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickItem = () => {
    updateActiveTableId(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
