import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface JSONEditorProps {
  onChange: (json: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onChange, error }) => {
  const [json, setJson] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newJson = e.target.value;
    setJson(newJson);
    onChange(newJson);
  };

  return (
    <div className="relative">
      <textarea
        className="w-full h-96 font-mono text-sm p-2 bg-gray-100"
        value={json}
        onChange={handleChange}
      />
      <SyntaxHighlighter
        language="json"
        style={tomorrow}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        {json}
      </SyntaxHighlighter>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default JSONEditor;

