import './index.css'
import {AiOutlineClose} from 'react-icons/ai'
import {BannerDiv} from './styledComponents'

const Banner = props => {
  const {bannerClicks} = props
  const clickingClose = () => {
    bannerClicks()
  }

  return (
    <BannerDiv data-testid="banner">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
          className="img2"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <button type="button" className="button4">
          GET IT NOW
        </button>
      </div>
      <button
        type="button"
        className="button3"
        data-testid="button"
        onClick={clickingClose}
      >
        <AiOutlineClose className="closeIcon" />
      </button>
    </BannerDiv>
  )
}
export default Banner
