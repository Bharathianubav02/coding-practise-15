// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewsIndex: 0,
  }
  onClickRightArrow = () => {
    const {activeReviewsIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewsIndex < reviewsList.Length - 1) {
      this.setState(prevState => ({
        activeReviewsIndex: prevState.activeReviewsIndex + 1,
      }))
    }
  

  renderActiveReview = review => {
    const {imageUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imageUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewsIndex} = this.state

    if (activeReviewsIndex > 0) {
      this.setState(prevState => ({
        activeReviewsIndex: prevState.activeReviewsIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewsIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewsIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            testid="right arrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="rightArrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
