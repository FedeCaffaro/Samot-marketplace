import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        [theme.breakpoints.up('xs')]: {
          height: 200,
        },
        [theme.breakpoints.up('sm')]: {
          height: 370,
        },
        [theme.breakpoints.up('lg')]: {
          height: 400,
        },
        [theme.breakpoints.up('xl')]: {
          height: 500,
        },
    },
	swiperContainer: {
		paddingBottom: '3rem',
		'& .swiper-pagination-bullet': {
			background: 'blue',
		},
		'& .swiper-button-next:after': {
			fontSize: '2rem !important',
		},
		'& .swiper-button-prev:after': {
			fontSize: '2rem !important',
		},
	},
  }));