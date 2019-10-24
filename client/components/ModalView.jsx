import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from '../styles.js';
import {
  ModalOverlay, Modal, ModalWrapper, ModalImgContainer, ModalImg, ModalReviewContainer, UserModalContainer, Avatar, ModalUserName, ModalDate, ModalReviewStars, ModalCommentContainer, ModalComment, ModalItemContainer, ModalImageContainer, ModalItemImage, ModalItemLink, ModalExitButton,
} from './styled.js';

const ModalView = ({
  modalHTML, handleExitModalView,
}) => (
  <ModalOverlay id="modalOverlay">
    <Modal id="modalContainer">
      <ModalWrapper>
        <ModalImgContainer>
          <ModalImg src={modalHTML.photoInComment} />
        </ModalImgContainer>
        <ModalReviewContainer>
          <UserModalContainer>
            <Avatar src={modalHTML.avatar} />
            <ModalUserName href="#">{modalHTML.username}</ModalUserName>
            <ModalDate>
              {modalHTML.date}
            </ModalDate>

          </UserModalContainer>

          <ModalReviewStars>
            <StarRatingComponent editing={false} value={modalHTML.rating} starCount={5} starColor="black" emptyStarColor="#E1E3DF" />
          </ModalReviewStars>
          <ModalCommentContainer>
            <ModalComment>
              {' '}
              {modalHTML.comment}
            </ModalComment>
          </ModalCommentContainer>

          <ModalItemContainer>
            <ModalImageContainer>
              <ModalItemImage src={modalHTML.itemPhoto} />
            </ModalImageContainer>
            <ModalItemLink>{modalHTML.item}</ModalItemLink>
          </ModalItemContainer>

          <ModalExitButton onClick={handleExitModalView}>X</ModalExitButton>


        </ModalReviewContainer>
      </ModalWrapper>

    </Modal>
  </ModalOverlay>
);


export default ModalView;
