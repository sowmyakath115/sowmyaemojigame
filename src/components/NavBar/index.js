import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score-con">
        <div className="logo-and-title-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="heading"> Emoji Game </h1>
        </div>

        {isGameInProgress && (
          <div className="scores-con">
            <p className="score"> Score: {currentScore}</p>
            <p className="score"> Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
