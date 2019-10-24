import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from '../styles.js';
import {
  Card, UsernameContainer, Avatar, AvatarContainer, UserNameDateDiv, UserNameATag, ReviewDate, ReviewStars, ReviewComment, PhotoInComment, ItemContainer, ItemPhoto, ItemLink,
} from './styled.js';

const ReviewItem = ({
  avatar, username, rating, photoInComment, date, comment, itemPhoto, item, handleModalView,
}) => (
  <Card>
    <UsernameContainer>
      <Avatar src={avatar} />
      <AvatarContainer>
        <UserNameDateDiv>
          <UserNameATag href="#">{username}</UserNameATag>
          <ReviewDate>
            {date}
          </ReviewDate>
        </UserNameDateDiv>
        <ReviewStars>
          <StarRatingComponent editing={false} value={rating} starCount={5} starColor="black" emptyStarColor="#E1E3DF" />
        </ReviewStars>

        {
            (photoInComment !== 'none'
              ? (
                <ReviewComment>
                  {' '}
                  {comment}
                  <br />
                  <PhotoInComment
                    onClick={() => handleModalView({
                      avatar, username, rating, photoInComment, date, comment, itemPhoto, item,
                    })}
                    src={photoInComment}
                  />
                </ReviewComment>
              )

              : (
                <ReviewComment>
                  {' '}
                  {comment}
                  {' '}
                </ReviewComment>
              ))
          }

      </AvatarContainer>
    </UsernameContainer>

    <ItemContainer>
      <ItemPhoto src={itemPhoto} />
      <ItemLink>{item}</ItemLink>
    </ItemContainer>


  </Card>

);

export default ReviewItem;
