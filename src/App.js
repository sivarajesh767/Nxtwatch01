import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import YoutubeContext from './components/YoutubeContext'

class App extends Component {
  state = {isTheme: false, savedItems: []}

  addSaveItems = item => {
    const {savedItems} = this.state
    const productObject = savedItems.find(
      eachCartItem => eachCartItem.id === item.id,
    )
    if (productObject) {
      this.setState(preState => ({
        savedItems: preState.savedItems.filter(each => each.id !== item.id),
      }))
    } else {
      const updatedCartList = [...savedItems, item]
      this.setState({savedItems: updatedCartList})
    }
  }

  ThemeIsClicked = () => {
    const {isTheme} = this.state
    if (isTheme) {
      this.setState({isTheme: false})
    } else {
      this.setState({isTheme: true})
    }
  }

  render() {
    const {isTheme, savedItems} = this.state
    return (
      <YoutubeContext.Provider
        value={{
          savedItems,
          isTheme,
          addSaveItems: this.addSaveItems,
          ThemeIsClicked: this.ThemeIsClicked,
          incrementCardItemQuantity: this.incrementCardItemQuantity,
          decrementCardItemQuantity: this.decrementCardItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="treading" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </YoutubeContext.Provider>
    )
  }
}
export default App