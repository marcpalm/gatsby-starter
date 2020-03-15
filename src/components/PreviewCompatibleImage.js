import React from 'react'
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', image } = imageInfo
  return <img style={imageStyle} src={image.publicURL} alt={alt} />
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.oneOfType(PropTypes.shape({
      publicURL: PropTypes.string.isRequired
    })).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
