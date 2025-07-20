import React, { useState } from 'react';
import {set, useForm} from 'react-hook-form'

import { createLogEntry } from './Api';

const LogEntryForm =  ({ location, onClose }) => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            await createLogEntry(data);
            onClose();
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">\
            { error ? <h3 className="error">{error}</h3> : null }

            <label htmlFor="title">Title</label>
            <input name="title" required ref={register}/>

            <label htmlFor="comments">Comments</label>
            <textarea name="comments" rows={3} ref={register}></textarea>

            <label htmlFor="Description">Description</label>
            <textarea name="Description" rows={3} ref={register}></textarea>

            <label htmlFor="image">Image</label>
            <input name="image" ref={register}/>

            <label htmlFor="visitDate">Visit Date</label>
            <input name="visitDate" type="date" required ref={register}/>

            <button disabled={loading}>{loading ? 'Loading...' : 'Create Entry'}</button>
        </form>
    )
};

export default LogEntryForm;