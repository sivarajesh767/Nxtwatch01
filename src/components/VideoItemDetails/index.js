import {Component} from 'react'
import Header from '../Header'
import SiderBar from '../SideBar'
import VideoItemBody from '../VideoItemBody'
import './index.css'

class VideoItemDetails extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SiderBar />
          <div className="videoItem">
            <VideoItemBody id={id} />
          </div>
        </div>
      </>
    )
  }
}
export default VideoItemDetails
