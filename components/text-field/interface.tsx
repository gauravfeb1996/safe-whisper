interface TextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  classNames?: {
    field?: string;
    inputGroup?: string;
    label?: string;
    description?: string;
    input?: string;
    required?: string;
  };
}