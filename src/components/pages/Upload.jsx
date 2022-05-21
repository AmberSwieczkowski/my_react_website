/** @format */

import React from 'react';
// import { Button } from '../Button';
import { useForm } from 'react-hook-form';

export default function FileUploadPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('picture', data.picture[0]);

    const res = await fetch('http://localhost:3001/picture', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('picture', { required: 'Required' })} type='file' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
