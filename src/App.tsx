import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import { FormSchema } from './types';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<FormSchema | null>(null);
  const [jsonError, setJsonError] = useState<string | null>(null);

  const handleJsonChange = (json: string) => {
    try {
      const parsedJson = JSON.parse(json);
      setJsonSchema(parsedJson);
      setJsonError(null);
    } catch (error) {
      setJsonError('Invalid JSON');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">JSON Editor</h2>
        <JSONEditor onChange={handleJsonChange} error={jsonError} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Form Preview</h2>
        <FormPreview schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;

