import { useState, useEffect } from 'react';
import CreateBicycles from '../../components/all-bicycles/create-bicycles';
import getBicycle from '../../api/get-api-all';
import deleteCardAPI from '../../api/delete-api';
import { IBicycleData } from '../../types/interface';

export const BicyclePage = () => {
    const [bicycleData, setBicycleData] = useState<IBicycleData[]>([]);
    
    useEffect(() => {
        getBicycle()
            .then((response) => {               
                if (Array.isArray(response)) {
                    const product = response.map((data) => ({
                        id: data.id,
                        name: data.name,
                        bicycleType: data.bicycleType,
                        materialType: data.materialType,
                        frameType: data.frameType,
                        sale: data.sale,
                        price: data.price,
                        wheelSize: data.wheelSize,
                        color: data.color,
                        description: data.description,
                        weight: data.weight,
                        guarantee: data.guarantee,
                        brakeType: data.brakeType,
                        brand: data.brand,
                        quantity: data.quantity,
                        images: data.images,
                    }));
                    setBicycleData(product);
                } else {
                    console.error('Expected an array but got:', response);
                }
            })
            .catch((error) => {
                console.error('Error fetching products', error);
            });
    }, []);
    
    const deleteBicycle = async (id: string) => {
        try {
            await deleteCardAPI(id);
            const updatedData = await getBicycle();
            if (Array.isArray(updatedData)) {
                setBicycleData(updatedData);
            } else {
                console.error('Expected an array but got:', updatedData);
            }
        } catch (error) {
            console.error('Error deleting card:', error);
        }
    };

    return (
        <div>
            {bicycleData.length > 0 ? (
                <CreateBicycles bicycleData={bicycleData} deleteBicycle={deleteBicycle} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
