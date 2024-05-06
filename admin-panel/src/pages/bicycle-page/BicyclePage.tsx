import { useState, useEffect } from 'react';
import CreateBicycles from '../../components/all-bicycles/create-bicycles';
import getBicycle from '../../api/get-api-all';
import deleteCardAPI from '../../api/delete-api';
import { IBicycleData } from '../../types/interface';

export const BicyclePage = () => {
    const [bicycleData, setBicycleData] = useState<IBicycleData[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBicycle();
                setBicycleData(data);
                console.log(bicycleData)
            } catch (error) {
                console.error('Error fetching bicycle data:', error);
            }
        };

        fetchData();
    }, []);

    const deleteBicycle = async (id: string) => {
        try {
            await deleteCardAPI(id);
            const updatedData = await getBicycle();
            setBicycleData(updatedData);
        } catch (error) {
            console.error('Error deleting card:', error);
        }
    };

    // useEffect(() => {
    //     console.log('Updated bicycleData:', bicycleData);
    // }, [bicycleData]);

    return (
        <div>
        <CreateBicycles bicycleData={bicycleData} deleteBicycle={deleteBicycle} />
        </div>
    );
};
