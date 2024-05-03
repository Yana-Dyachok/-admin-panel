import { useState } from 'react';
import deleteCardAPI from '../../api/delete-api';
import { formBicycle } from '../../components/form/form';

export const FormPage = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = async () => {
    setClicked(true);
    setIsLoading(true);
    try {
      await deleteCardAPI('3fa85f64-5717-4562-b3fc-2c963f66afa6');
      setIsDeleted(true);
    } catch (error) {
      console.error('Error deleting card:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div onClick={handleClick}>
    //   {isLoading ? (
    //     <p>Loading...</p>
    //   ) : clicked ? (
    //     isDeleted ? (
    //       <p>Card deleted successfully!</p>
    //     ) : (
    //       <p>Error deleting card.</p>
    //     )
    //   ) : (
    //     <h1>Click to delete card</h1>
    //   )}
    // </div>
    <div>
      {formBicycle()}
    </div>
  );
};
