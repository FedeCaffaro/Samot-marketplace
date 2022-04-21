import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardMedia from '@material-ui/core/CardMedia'
import useStyles from './styles';

import SwiperCore, {
	Keyboard,
	Scrollbar,
	Pagination,
	Navigation,
} from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])

const Carousel = ({ product }) => {
  const classes = useStyles();

	return (
			<Swiper
				grabCursor
				keyboard={{ enabled: false }}
				pagination={{ clickable: true }}
				navigation
				loop
				className={classes.swiperContainer}
			>
        {product.assets.map((assets) => (
        <SwiperSlide>
          <CardMedia className={classes.media} image={assets.url} />
        </SwiperSlide>
      ))}
			</Swiper>
	)
}

export default Carousel;
