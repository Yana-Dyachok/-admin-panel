import { IBicycleData } from '../../types/interface';
import styles from './bicycle.module.css';
interface Props {
    bicycleData: IBicycleData[];
    deleteBicycle: (id: string) => void;
}

export const CreateBicycles: React.FC<Props> = ({
    bicycleData,
    deleteBicycle,
}) => {
    return (
        <>
            {bicycleData.length > 0 ? (
                bicycleData.map((bicycle) => (
                    <div key={bicycle.id} className={styles.bicycleItem}>
                        <h2>{bicycle.name}</h2>
                        <div className={styles.bicycleBlock}>
                            <div className={styles.bicycleInfoBlock}>
                                <p>Type: {bicycle.bicycleType}</p>
                                <p>Material: {bicycle.materialType}</p>
                                <p>Frame: {bicycle.frameType}</p>
                                <p>Sale: {bicycle.sale ? 'Yes' : 'No'}</p>
                                <p>Price: {bicycle.price}</p>
                                <p>Wheel Size: {bicycle.wheelSize}</p>
                                <p>Color: {bicycle.color}</p>
                                <p>Weight: {bicycle.weight}</p>
                                <p>Guarantee: {bicycle.guarantee}</p>
                                <p>Brake Type: {bicycle.brakeType}</p>
                                <p>Brand: {bicycle.brand}</p>
                                <p>Quantity: {bicycle.quantity}</p>
                            </div>
                            <div className={styles.imgBlock}>
                                {bicycle.images.map((image, imgIndex) => (
                                    <img
                                        className={styles.cardImg}
                                        key={imgIndex}
                                        src={image}
                                        alt={`Image ${imgIndex}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={styles.description}>Description: {bicycle.description}</div>
                        <button
                            className={styles.btnDelete}
                            onClick={() => deleteBicycle(bicycle.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <div>there are no bicycles</div>
            )}
        </>
    );
};

export default CreateBicycles;
