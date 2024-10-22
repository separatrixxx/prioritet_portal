import { SlideProps } from './Slide.props';
import styles from './Slide.module.css';
import Image from 'next/image';


export const Slide = ({ image, alt }: SlideProps): JSX.Element => {
	return (
		<div className={styles.productImage}>
			<Image className={styles.image}
				draggable='false'
				loader={() => image}
				src={image}
				alt={alt}
				width={1}
				height={1}
				unoptimized={true}
				priority
				quality={20}
			/>
		</div>
	);
};