import { IBicycleData } from '../../types/interface'; 
interface Props {
  bicycleData: IBicycleData[];
  deleteBicycle: (id: string) => void;
}

export const CreateBicycles: React.FC<Props> = ({ bicycleData, deleteBicycle }) => {

  return (
    <div>
      {bicycleData.length > 0 ?bicycleData.map((bicycle) => (
        <div key={bicycle.id} className='bicycle__item'>
          <h2>{bicycle.name}</h2>
          <p>Type: {bicycle.bicycleType}</p>
          <p>Material: {bicycle.materialType}</p>
          <p>Frame: {bicycle.frameType}</p>
          <p>Sale: {bicycle.sale ? 'Yes' : 'No'}</p>
          <p>Price: {bicycle.price}</p>
          <p>Wheel Size: {bicycle.wheelSize}</p>
          <p>Color: {bicycle.color}</p>
          <p>Description: {bicycle.description}</p>
          <p>Weight: {bicycle.weight}</p>
          <p>Guarantee: {bicycle.guarantee}</p>
          <p>Brake Type: {bicycle.brakeType}</p>
          <p>Brand: {bicycle.brand}</p>
          <p>Quantity: {bicycle.quantity}</p>
          <div>
            {bicycle.images.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt={`Image ${imgIndex}`} />
            ))}
          </div>
          <button onClick={() => deleteBicycle(bicycle.id)}>Delete</button>
        </div>
      )): (
        <div>there are no bicycles</div>
      )}
    </div>
  );
};

export default CreateBicycles;
