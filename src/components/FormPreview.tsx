import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormGenerator from './FormGenerator';
import { FormSchema } from '../types';

interface FormPreviewProps {
  schema: FormSchema | null;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  if (!schema) {
    return <div>No valid schema provided</div>;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="text-xl font-bold">{schema.formTitle}</h3>
        <p className="text-gray-600">{schema.formDescription}</p>
        <FormGenerator fields={schema.fields} />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default FormPreview;

