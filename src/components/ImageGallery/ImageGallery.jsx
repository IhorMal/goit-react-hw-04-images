import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

export const ImageGallery = ({ image, search }) => {
    return (
        <div className={css.conteiner}>
            <ul className={css.gallery}>
                {image.map((value) => {
                    return <li key={value.id} onClick={() => search(value.id)}>
                        <ImageGalleryItem
                            largeImage={value.largeImageURL}
                        />
                    </li>
                })}
            </ul>
        </div>
    )
};

