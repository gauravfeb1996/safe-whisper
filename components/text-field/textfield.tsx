import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"

export function TextField({
  label,
  description,
  placeholder,
  type,
  disabled = false,
  isRequired = false,
  isInvalid = false,
  leftAddon,
  rightAddon,
  classNames = {
    field: "",
    label: "",
    description: "",
    input: "",
    required: "text-destructive",
  },
}: TextFieldProps) {

  const renderAddon = (
    content: React.ReactNode,
    align: "inline-start" | "inline-end"
  ) =>
  (
    <InputGroupAddon align={align}>
      {content}
    </InputGroupAddon>
  );

  return (
    <Field className={classNames.field} data-invalid={isInvalid}>
      {label && <FieldLabel htmlFor={label} className={classNames.label}>
        {label}
        {isRequired && <span className={classNames.required}>*</span>}
      </FieldLabel>}
      <InputGroup className={classNames.inputGroup}>
        {leftAddon && renderAddon(leftAddon, "inline-start")}
        <InputGroupInput
          className={classNames.input}
          id={label}
          type={type}
          placeholder={placeholder || ""}
          disabled={disabled}
          aria-invalid={isInvalid}
        />
        {rightAddon && renderAddon(rightAddon, "inline-end")}
      </InputGroup>
      {description && <FieldDescription className={classNames.description}>
        {description}
      </FieldDescription>}
    </Field>
  )
}
