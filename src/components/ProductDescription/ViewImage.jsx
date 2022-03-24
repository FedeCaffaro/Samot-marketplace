import { Container, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import './ViewImage.css'
import ImageModal from './ImageModal'
import { ThumbnailImgs, Images } from './imgData'

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(20),
    marginTop: theme.spacing(5),
  },
}))

const ViewImage = () => {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const [value, setValue] = useState(0)
  const { src } = Images[value]

  return (
    <Container className={classes.container}>
      <img
        src={src}
        alt='product'
        width={378}
        height={350}
        style={{ borderRadius: '8px' }}
        onClick={handleShow}
        className='mainImg'
      />
      <div style={{ display: 'flex' }}>
        {ThumbnailImgs.map((thumb, id) => {
          return (
            <div className={`btnCon ${id === value && 'activeCon'}`}>
              <img
                key={thumb.id}
                className={`btnStyle ${id === value && 'activeBtn'}`}
                src={thumb.src}
                height={70}
                width={70}
                alt='thumbnail'
                onClick={() => setValue(id)}
              />
            </div>
          )
        })}
        <ImageModal show={show} onHide={handleClose} />
      </div>
    </Container>
  )
}

export default ViewImage
