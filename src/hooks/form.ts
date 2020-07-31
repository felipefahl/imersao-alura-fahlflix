import {
  useState,
  useCallback,
  ChangeEvent,
  SetStateAction,
  Dispatch,
} from 'react';

interface UseFormData<T> {
  values: T;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  clearForm(): void;
  setValues: Dispatch<SetStateAction<T>>;
}

const useForm = <T>(valoresIniciais: T): UseFormData<T> => {
  const [values, setValues] = useState<T>(valoresIniciais);

  const setValue = useCallback(
    (chave: string, valor: string) => {
      setValues({
        ...values,
        [chave]: valor,
      });
    },
    [values],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const key = event.target.getAttribute('name') || '';
      setValue(key, value);
    },
    [setValue],
  );

  const clearForm = useCallback(() => {
    setValues(valoresIniciais);
  }, [valoresIniciais]);

  return {
    values,
    handleChange,
    clearForm,
    setValues,
  };
};

export default useForm;
