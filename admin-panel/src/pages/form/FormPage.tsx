import { useState } from 'react';
import deleteCardAPI from '../../api/delete-api';
import { FormBicycle } from '../../components/form/form/form';

export const FormPage = () => {
    const [clicked, setClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleClick = async () => {
        setClicked(true);
        setIsLoading(true);
        try {
            await deleteCardAPI('4fd3a6fe-7cf6-4ae7-8732-4fcdfcdfd165');
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
        <div>{FormBicycle()}</div>
    );
};
