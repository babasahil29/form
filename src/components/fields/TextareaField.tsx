import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormField } from '../../types';

interface TextareaFieldProps {
  field: FormField;
  register: UseFormRegister<any>;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ field, register }) => {
  return (
    <div className="mb-4">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
        {field.label}
      </label>
      <textarea
        id={field.id}
        {...register(field.id, { required: field.required })}
        placeholder={field.placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows={4}
      ></textarea>
    </div>
  );
};

export default TextareaField;

