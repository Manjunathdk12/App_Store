import './index.css'

const AppItem = prop => {
  const {appDetails} = prop
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-img-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
