import React from 'react';
import { Carousel, Modal, ModalBody } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import './ImageModal.css'
import { Images } from './imgData'

const ImageModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      contentClassName='modalContent'
    >
      <ModalHeader
        closeButton={true}
        onClick={props.onClick}
        className='modal-header'
      />
      <ModalBody className='modal-body'>
        <Carousel
          className='carousel'
          indicators={false}
          interval={null}
          nextIcon={
            <span aria-hidden='true' className='carousel-control-next-icon' />
          }
          prevIcon={
            <span aria-hidden='true' className='carousel-control-prev-icon' />
          }
        >
          {Images.map((image, id) => {
            return (
              <Carousel.Item>
                <img src={image.src} alt='carouselimg' className='img' />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </ModalBody>
    </Modal>
  )
}

export default ImageModal
