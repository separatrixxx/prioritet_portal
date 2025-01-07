import styles from './MainImages.module.css';
import Image from 'next/image';


export const MainImages = (): JSX.Element => {
    return (
        <div className={styles.mainImages}>
            <Image className={styles.mainImage}
				draggable='false'
				loader={() => '/MainImage1.webp'}
				src={'/MainImage1.webp'}
				alt='main image'
				width={1}
				height={1}
				unoptimized={true}
				priority
				quality={20}
			/>
            <Image className={styles.mainImage}
				draggable='false'
				loader={() => '/MainImage2.webp'}
				src={'/MainImage2.webp'}
				alt='main image'
				width={1}
				height={1}
				unoptimized={true}
				priority
				quality={20}
			/>
            <Image className={styles.mainImage}
				draggable='false'
				loader={() => '/MainImage3.webp'}
				src={'/MainImage3.webp'}
				alt='main image'
				width={1}
				height={1}
				unoptimized={true}
				priority
				quality={20}
			/>
        </div>
    );
};
