import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-formio';

const FormIO = ({ schema }) => {
  const options = {
    // language: locale !== null ? locale : 'en',
    // i18n: i18n,
    readOnly: false,
    noAlerts: true,
  };

  const onSubmit = (submission) => {
    console.log(submission);
  };
  return (
    <React.Fragment>
      <Form form={schema} onSubmit={onSubmit} options={options} />
    </React.Fragment>
  );
};

export { FormIO };
