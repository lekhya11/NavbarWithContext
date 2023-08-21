import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const lightImage = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const darkImage = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const mainHeading = isDarkTheme
        ? 'main-heading-light'
        : 'main-heading-dark'

      const image = isDarkTheme ? darkImage : lightImage

      return (
        <div className={homeBgClassName}>
          <Navbar />
          <img src={image} alt="home" className="image" />
          <h1 className={mainHeading}> Home </h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
