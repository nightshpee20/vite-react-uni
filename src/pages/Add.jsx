import React from 'react';
import { useState } from 'react';
import './Add.css';

const Add = () => {
    const [formData, setFormData] = useState({
        name: '',
        kcal: '',
        protein: '',
        fat: '',
        carbs: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name || formData.name.length > 60) {
            newErrors.name = 'Name is required and must be less than 60 characters';
        }
        if (formData.kcal === '') {
            newErrors.kcal = 'Kcal is required';
        } else if (formData.kcal < 0) {
            newErrors.kcal = 'Kcal must be a positive number';
        }
        if (formData.protein === '') {
            newErrors.protein = 'Protein is required';
        } else if (formData.protein < 0) {
            newErrors.protein = 'Protein must be a positive number';
        }
        if (formData.fat === '') {
            newErrors.fat = 'Fat is required';
        } else if (formData.fat < 0) {
            newErrors.fat = 'Fat must be a positive number';
        }
        if (formData.carbs === '') {
            newErrors.carbs = 'Carbs is required';
        } else if (formData.carbs < 0) {
            newErrors.carbs = 'Carbs must be a positive number';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8080/food-lookup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                window.location.href = '/';
            } else {
                alert("Something went wrong, please try again.")
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name*</label>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                    <input type="text" name="name" value={formData.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Kcal*</label>
                    {errors.kcal && <span className="error-message">{errors.kcal}</span>}
                    <input type="number" name="kcal" value={formData.kcal} onChange={handleChange} />
                </div>
                <div>
                    <label>Protein (g)*</label>
                    {errors.protein && <span className="error-message">{errors.protein}</span>}
                    <input type="number" name="protein" value={formData.protein} onChange={handleChange} />
                </div>
                <div>
                    <label>Fat (g)*</label>
                    {errors.fat && <span className="error-message">{errors.fat}</span>}
                    <input type="number" name="fat" value={formData.fat} onChange={handleChange} />
                </div>
                <div>
                    <label>Carbs (g)*</label>
                    {errors.carbs && <span className="error-message">{errors.carbs}</span>}
                    <input type="number" name="carbs" value={formData.carbs} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Add;