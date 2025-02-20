import './index.css'

const TabItem = prop => {
  const {tabDetails, clickTabItem, isActive} = prop
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tabItem">
      <button
        className={`button ${activeTabBtnClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
