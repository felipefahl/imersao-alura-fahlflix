import React, { ChangeEvent, useState, useCallback, useMemo } from 'react';
import { Input, FormFieldWrapper, Label, LabelText } from './styles';

interface FormFieldProps {
  text: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type?: 'text' | 'color' | 'textarea';
}

const FormField: React.FC<FormFieldProps> = ({
  text,
  name,
  onChange,
  type,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const fieldType = isTextArea ? 'input' : type;

  const handleInputFocus = useCallback(() => {
    if (type !== 'color') {
      setIsFocused(true);
    }
  }, [type]);

  const handleInputOnBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const hasValue = useMemo(() => {
    return value.length > 0;
  }, [value]);

  const fieldAtributes = useMemo(() => {
    return {
      name,
      onChange,
      value,
      type: fieldType,
    };
  }, [name, onChange, value, fieldType]);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <LabelText isFocused={isFocused} hasValue={hasValue}>
          {text}:
        </LabelText>
        <Input
          as={tag}
          id={fieldId}
          onFocus={handleInputFocus}
          onBlur={handleInputOnBlur}
          {...fieldAtributes}
        />
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
