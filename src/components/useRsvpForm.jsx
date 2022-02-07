/** @format */

import { useState, useEffect } from 'react';

const useRsvpForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    guests: '',
    coming: false,
    notComing: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleStatus = e => {
    const { name } = e.target;
    if (e.target.checked) {
      setValues({
        ...values,
        [name]: true,
      })
    } else {
      setValues({
        ...values,
        [name]: false,
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const encode = data => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'rsvp', ...values }),
      })
        // .then(() => alert('Success!'))
        .then(() => callback())
        .then(() => setIsSubmitting(false))
        .then(() =>
          setValues({ firstname: '', lastname: '', email: '', guests: '', coming: false, notComing: false })
        )
        .catch((error) => alert(error));
    }
  }, [errors, values, isSubmitting]);

  return { handleChange, handleStatus, values, handleSubmit, errors };
};

export default useRsvpForm;
