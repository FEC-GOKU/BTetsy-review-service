import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from '../styles.js';
import ReviewItem from './ReviewItem.jsx';
import ModalView from './ModalView.jsx';
import {
  ReviewContainer, ReviewHeader, ReviewH4, ReviewH4Span, Card, MoreButton, MoreButtonSpan,
} from './styled.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHTML: {
        photoInComment: 'test',
      },
    };

    this.handleExitModalView = this.handleExitModalView.bind(this);
    this.handleModalView = this.handleModalView.bind(this);
  }

  handleModalView({
    avatar, date, item, username, itemPhoto, photoInComment, comment, rating,
  }) {
    const modalView = {
      date, item, username, itemPhoto, photoInComment, comment, avatar, rating,
    };

    const modal = document.querySelector('#modalContainer');


    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    const modalOverlay = document.querySelector('#modalOverlay');

    setTimeout(() => {
      // modalOverlay.style.removeProperty('opacity');
      modalOverlay.style.opacity = 1;
    }, 0);

    modalOverlay.style.display = 'block';
    modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

    this.setState({
      modalHTML: modalView,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleExitModalView() {
    const modal = document.querySelector('#modalContainer');
    modal.style.display = 'none';
    const modalOverlay = document.querySelector('#modalOverlay');

    modalOverlay.style.display = 'none';
    modalOverlay.style.backgroundColor = '';
    modalOverlay.style.opacity = '0';

    const body = document.querySelector('body');
    body.style.overflow = 'scroll';
  }

  render() {
    const {
      ratings, getComments, comments, reviews,
    } = this.props;

    const { modalHTML } = this.state;

    return (
      <ReviewContainer>
        <ReviewHeader>
          <ReviewH4>
            Reviews
            <ReviewH4Span>
              <StarRatingComponent editing={false} value={ratings} starCount={5} starColor="black" emptyStarColor="#E1E3DF" />
            </ReviewH4Span>
            (
            {reviews}
            )
          </ReviewH4>
        </ReviewHeader>

        <Card id="card">
          <ModalView
            handleExitModalView={this.handleExitModalView}
            modalHTML={modalHTML}
          />


          {comments.map((ele) => (
            <ReviewItem
              key={ele.id}
              avatar={ele.reviewerAvatar}
              comment={ele.reviewerComment}
              date={ele.reviewerDate}
              item={ele.reviewerItem}
              username={ele.reviewerName}
              itemPhoto={ele.reviewerItemPhoto}
              photoInComment={ele.reviewerPhotoInComment}
              rating={ele.rating}
              handleModalView={this.handleModalView}
            />
          ))}
          <MoreButton id="more-btn" onClick={getComments}>
            <MoreButtonSpan>+ More</MoreButtonSpan>
          </MoreButton>
        </Card>

      </ReviewContainer>
    );
  }
}


export default ReviewList;
