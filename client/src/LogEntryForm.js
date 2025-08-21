import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from './Api';

const LogEntryForm = ({ location, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setError('');
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            
            // Convert rating to number
            if (data.rating) {
                data.rating = parseInt(data.rating);
            }
            
            await createLogEntry(data);
            onClose();
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            {error ? <h3 className="error">{error}</h3> : null}

            <label htmlFor="title">Title</label>
            <input 
                id="title"
                type="text"
                {...register("title", { required: "Title is required" })}
            />
            {errors.title && <span className="error">{errors.title.message}</span>}

            <label htmlFor="rating">Rating (0-10)</label>
            <input 
                id="rating"
                type="number" 
                min="0" 
                max="10" 
                step="1"
                {...register("rating", { 
                    min: { value: 0, message: "Rating must be at least 0" },
                    max: { value: 10, message: "Rating must be at most 10" }
                })}
            />
            {errors.rating && <span className="error">{errors.rating.message}</span>}

            <label htmlFor="comments">Comments</label>
            <textarea 
                id="comments"
                rows={3} 
                {...register("comments")}
            ></textarea>

            <label htmlFor="description">Description</label>
            <textarea 
                id="description"
                rows={3} 
                {...register("description")}
            ></textarea>

            <label htmlFor="image">Image URL</label>
            <input 
                id="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                {...register("image")}
            />

            <label htmlFor="visitDate">Visit Date</label>
            <input 
                id="visitDate"
                type="date" 
                {...register("visitDate", { required: "Visit date is required" })}
            />
            {errors.visitDate && <span className="error">{errors.visitDate.message}</span>}

            <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Create Entry'}
            </button>
        </form>
    );
};

export default LogEntryForm;