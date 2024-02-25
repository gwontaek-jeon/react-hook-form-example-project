import { ChangeHandler, RegisterOptions, useForm, UseFormProps } from 'react-hook-form'
export interface UseCustomFormProps extends UseFormProps {
  trim?: boolean
}

export const useCustomForm = ({ trim, ...props }: UseCustomFormProps) => {
  const methods = useForm(props)

  const customRegister = (name: string, registerOptions?: RegisterOptions) => {
    const field = methods.register(name, registerOptions)

    const customOnChange: ChangeHandler = async (event) => {
      const target = event.target

      if (trim && typeof target.value === 'string' && target.value) {
        target.value = target.value.trim()
      }

      await field.onBlur(event)
    }

    return { ...field, onChange: customOnChange }
  }

  return { ...methods, register: customRegister }
}
