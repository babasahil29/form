import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField } from '../types';
import TextField from './fields/TextField';
import SelectField from './fields/SelectField';
import RadioField from './fields/RadioField';
import TextareaField from './fields/TextareaField';

interface FormGeneratorProps {
  fields: FormField[];
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ fields }) => {
  const { register } = useFormContext();

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
        return <TextField key={field.id} field={field} register={register} />;
      case 'select':
        return <SelectField key={field.id} field={field} register={register} />;
      case 'radio':
        return <RadioField key={field.id} field={field} register={register} />;
      case 'textarea':
        return <TextareaField key={field.id} field={field} register={register} />;
      default:
        return null;
    }
  };

  return <>{fields.map(renderField)}</>;
};

export default FormGenerator;

