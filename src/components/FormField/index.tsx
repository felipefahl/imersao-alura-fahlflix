import React, { ChangeEvent } from 'react';
import { Input, TextArea } from './styles';

interface FormFieldProps {
  text: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  value: string;
  name: string;
  type: 'text' | 'color' | 'textarea';
}

const FormField: React.FC<FormFieldProps> = ({
  text,
  name,
  onChange,
  type,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <span>{text}:</span>
        {type === 'textarea' ? (
          <TextArea name={name} onChange={onChange} value={value} />
        ) : (
          <Input name={name} type={type} onChange={onChange} value={value} />
        )}
      </label>
    </div>
  );
};

export default FormField;
