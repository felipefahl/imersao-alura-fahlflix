import React, { ChangeEvent, useState, useCallback, useMemo } from 'react';
import { Input, FormFieldWrapper, Label, LabelText } from './styles';

interface FormFieldProps {
  text: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type?: 'text' | 'color' | 'textarea';
  suggestions?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
  text,
  name,
  onChange,
  type,
  value,
  suggestions,
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
    if (!value) {
      return false;
    }
    return value.length > 0;
  }, [value]);

  const hasSuggestions = useMemo(() => {
    if (!suggestions) {
      return false;
    }
    return suggestions.length > 0;
  }, [suggestions]);

  const fieldAtributes = useMemo(() => {
    return {
      name,
      onChange,
      value,
      type: fieldType,
      autoComplete: hasSuggestions ? 'off' : 'on',
      list: hasSuggestions ? `suggestionFor_${fieldId}` : undefined,
    };
  }, [name, onChange, value, fieldType, hasSuggestions, fieldId]);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          onFocus={handleInputFocus}
          onBlur={handleInputOnBlur}
          {...fieldAtributes}
        />
        <LabelText isFocused={isFocused} hasValue={hasValue}>
          {text}:
        </LabelText>
        {suggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map(suggestion => (
              <option
                value={suggestion}
                key={`suggestionFor_${fieldId}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
