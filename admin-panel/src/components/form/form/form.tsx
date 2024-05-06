import { useState } from 'react';
import { IBicycle } from '../../../types/interface';
import { MaterialType, FrameType, BicycleType } from '../../../types/enum';
import { hexToRgb, rgbToHex } from '@mui/material';
import { bicycleTypes, wheelSizes, materialTypes } from './const-form';
import createBicycle from '../../../api/post-api';

export const FormBicycle = () => {
    const [bicycleData, setBicycleData] = useState<IBicycle>({
        name: '',
        bicycleType: BicycleType.MOUNTAIN,
        materialType: MaterialType.ALUMINIUM,
        frameType: FrameType.OPEN,
        sale: false,
        price: 0,
        wheelSize: 26,
        color: '#000000',
        description: '',
        weight: 0,
        guarantee: 0,
        brakeType: '',
        brand: '',
        quantity: 0,
        images:[],
    });

    const [images, setImage] = useState<string>('');

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = event.target;
        const value = event.target.type === 'checkbox' ? !bicycleData.sale : event.target.value;
        setBicycleData({ ...bicycleData, [name]: value });
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const createdBicycle = await createBicycle({
                ...bicycleData,
                images: [images],
            });
            console.log('ok:', createdBicycle);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (reader.result) {
                    setImage(reader.result.toString().split(",")[1]);
                }
            };
        }
    };    

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const hexColor = event.target.value;
        const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexColor);
        let newHexColor = '#000000';

        if (isValidHex) {
            setBicycleData({ ...bicycleData, color: hexColor });
        } else {
            const rgbColor = hexToRgb(hexColor);
            if (rgbColor) {
                newHexColor = rgbToHex(rgbColor);
            }
            setBicycleData({ ...bicycleData, color: newHexColor });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={bicycleData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="color"
                    name="color"
                    defaultValue={bicycleData.color}
                    onChange={handleColorChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Brand name"
                    name="brand"
                    defaultValue={bicycleData.brand}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Brake type"
                    name="brakeType"
                    defaultValue={bicycleData.brakeType}
                    onChange={handleInputChange}
                    required
                />

                <div className="bike__input">
                    <label className="price__label" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={bicycleData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="bike__input">
                    <label className="weight__label" htmlFor="weight">
                        Weight
                    </label>
                    <input
                        type="number"
                        name="weight"
                        defaultValue={bicycleData.weight}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="bike__input">
                    <label className="quantity__label" htmlFor="quantity">
                        {' '}
                        Quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        defaultValue={bicycleData.quantity}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="bike__input">
                    <label className="guarantee__label" htmlFor="guarantee">
                        Guarantee
                    </label>
                    <input
                        type="number"
                        name="guarantee"
                        defaultValue={bicycleData.guarantee}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="bike__radio-input radio-input">
                <div className="radio-input__block">
                    {bicycleTypes.map((type) => (
                        <div key={type.value}>
                            <input
                                type="radio"
                                name="bicycleType"
                                value={type.value}
                                checked={bicycleData.bicycleType === type.value}
                                onChange={handleInputChange}
                            />
                            <label htmlFor={type.value}>{type.label}</label>
                        </div>
                    ))}
                </div>
                <div className="radio-input__block">
                    {wheelSizes.map((size) => (
                        <div className="radio-input__item" key={size.value}>
                            <input
                                type="radio"
                                name="wheelSize"
                                value={String(size.value)}
                                checked={
                                    String(bicycleData.wheelSize) ===
                                    String(size.value)
                                }
                                onChange={handleInputChange}
                            />
                            <label
                                className="wheel-diameter__label"
                                htmlFor={`wheelSize-${size.value}`}
                            >
                                {size.label}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="radio-input__block">
                    {materialTypes.map((material) => (
                        <div
                            className="material-type__item"
                            key={material.value}
                        >
                            <input
                                type="radio"
                                name="materialType"
                                value={material.value}
                                checked={
                                    bicycleData.materialType === material.value
                                }
                                onChange={handleInputChange}
                            />
                            <label
                                className="material-type__label"
                                htmlFor={`materialType-${material.value}`}
                            >
                                {material.label}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="radio-input__block frame-type">
                    {[FrameType.CLOSED, FrameType.OPEN].map((frameType) => (
                        <div className="frame-type__item" key={frameType}>
                            <input
                                type="radio"
                                name="frameType"
                                value={frameType}
                                checked={bicycleData.frameType === frameType}
                                onChange={handleInputChange}
                                id={`frameType${frameType}`}
                            />
                            <label
                                className="frame-type__label"
                                htmlFor={`frameType${frameType}`}
                            >
                                {frameType[0] +
                                    frameType
                                        .slice(1, frameType.length)
                                        .toLowerCase()}
                            </label>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="img">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={changeImageHandler}
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Description"
                        name="description"
                        defaultValue={bicycleData.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <div>
                        <input
                            type="checkbox"
                            name="sale"
                            checked={bicycleData.sale}
                            onChange={handleInputChange}
                        />
                        <label className="sale__label" htmlFor="sale">
                            sale
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit">Send</button>
        </form>
    );
};
