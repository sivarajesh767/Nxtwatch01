import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoBody from '../SavedVideoBody'
import './index.css'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            <SavedVideoBody />
          </div>
        </div>
      </>
    )
  }
}
export default SavedVideos
