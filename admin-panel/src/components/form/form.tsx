import { useState } from 'react';
import { IBicycle } from '../../types/interface';
import { MaterialType, FrameType, BicycleType } from '../../types/enum';
import { hexToRgb, rgbToHex } from '@mui/material';

export const formBicycle = () => {
    const [bicycleData, setBicycleData] = useState<IBicycle>({
        name: '',
        bicycleType: BicycleType.MOUNTAIN,
        materialType: MaterialType.ALUMINIUM,
        frameType: FrameType.OPEN,
        sale: false,
        price: 0,
        wheelSize: 0,
        color: '',
        description: '',
        weight: 0,
        guarantee: 0,
        brakeType: '',
        brand: '',
        quantity: 0,
        images: [],
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setBicycleData({ ...bicycleData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(bicycleData);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            const base64FilesArray: string[] = [];

            filesArray.forEach((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const base64String = reader.result as string;
                    base64FilesArray.push(base64String);
                    setBicycleData({
                        ...bicycleData,
                        images: base64FilesArray,
                    });
                };
            });
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
                />
                <input
                    type="color"
                    name="color"
                    defaultValue={bicycleData.color}
                    onChange={handleColorChange}
                />
                <input
                    type="text"
                    placeholder="Bicycle type"
                    name="bicycleType"
                    defaultValue={bicycleData.bicycleType}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Brand name"
                    name="brand"
                    defaultValue={bicycleData.brand}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Brake type"
                    name="brakeType"
                    defaultValue={bicycleData.brakeType}
                    onChange={handleInputChange}
                />

                <div className="bike__input">
                    <label className="price__label" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={bicycleData.price}
                    />
                </div>

                <div className="bike__input">
                    <label className="weight__label" htmlFor="weight">
                        Weight
                    </label>
                    <input
                        type="number"
                        name="weight"
                        value={bicycleData.weight}
                        onChange={handleInputChange}
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
                        value={bicycleData.quantity}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="bike__input">
                    <label className="guarantee__label" htmlFor="guarantee">
                        Guarantee
                    </label>
                    <input
                        type="number"
                        name="guarantee"
                        value={bicycleData.guarantee}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="bike__radio-input radio-input">
                <div className="radio-input__block">
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="bicycleType"
                            value={bicycleData.bicycleType}
                            onChange={handleInputChange}
                        />
                        <label className="name__label" htmlFor="bicycleType">
                            Mountain
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="bicycleType"
                            value={bicycleData.bicycleType}
                            onChange={handleInputChange}
                        />
                        <label className="name__label" htmlFor="bicycleType">
                            {' '}
                            Highway
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="bicycleType"
                            value={bicycleData.bicycleType}
                            onChange={handleInputChange}
                        />
                        <label className="name__label" htmlFor="bicycleType">
                            {' '}
                            City
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="bicycleType"
                            value={bicycleData.bicycleType}
                            onChange={handleInputChange}
                        />
                        <label className="name__label" htmlFor="bicycleType">
                            {' '}
                            Electro
                        </label>
                    </div>
                </div>
                <div className="radio-input__block">
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="wheelSize"
                            value={bicycleData.wheelSize}
                        />
                        <label
                            className="wheel-diameter__label"
                            htmlFor="wheelSize"
                        >
                            26
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="wheelSize"
                            value={bicycleData.wheelSize}
                            onChange={handleInputChange}
                        />
                        <label
                            className="wheel-diameter__label"
                            htmlFor="wheelSize"
                        >
                            {' '}
                            28
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="wheelSize"
                            value={bicycleData.wheelSize}
                            onChange={handleInputChange}
                        />
                        <label
                            className="wheel-diameter__label"
                            htmlFor="wheelSize"
                        >
                            {' '}
                            29
                        </label>
                    </div>
                </div>
                <div className="radio-input__block">
                    <div className="material-type__item">
                        <input
                            type="radio"
                            name="materialType"
                            value={bicycleData.materialType}
                            onChange={handleInputChange}
                        />
                        <label
                            className="wheel-diameter__label"
                            htmlFor="materialType"
                        >
                            Aluminium
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="materialType"
                            value={bicycleData.materialType}
                            onChange={handleInputChange}
                        />
                        <label
                            className="wheel-diameter__label"
                            htmlFor="materialType"
                        >
                            {' '}
                            Carbon
                        </label>
                    </div>
                    <div className="radio-input__item">
                        <input
                            type="radio"
                            name="materialType"
                            value={bicycleData.materialType}
                            onChange={handleInputChange}
                        />
                        <label
                            className="wheel-diameter__label"
                            htmlFor="materialType"
                        >
                            {' '}
                            Titanum
                        </label>
                    </div>
                </div>
                <div className="radio-input__block frame-type">
                    <div className="frame-type__item">
                        <input
                            type="radio"
                            name="frameType"
                            value={bicycleData.frameType}
                            onChange={handleInputChange}
                        />
                        <label
                            className="frame-type__label"
                            htmlFor="frameType"
                        >
                            {' '}
                            Close
                        </label>
                    </div>
                    <div className="frame-type__item">
                        <input
                            type="radio"
                            name="frameType"
                            value={bicycleData.frameType}
                            onChange={handleInputChange}
                        />
                        <label
                            className="frame-type__label"
                            htmlFor="frameType"
                        >
                            {' '}
                            Open
                        </label>
                    </div>
                </div>
                <div>
                    <div className="img">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <textarea
                        placeholder="Description"
                        value={bicycleData.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            </div>
            <button type="submit">Send</button>
        </form>
    );
};
