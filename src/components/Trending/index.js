import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItemBody from '../VideoItemBody'

class Trending extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            <VideoItemBody />
          </div>
        </div>
      </>
    )
  }
}
export default Trending
