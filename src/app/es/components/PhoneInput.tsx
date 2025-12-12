import BasePhoneInput from '../../../components/PhoneInput'

interface Props extends React.ComponentProps<typeof BasePhoneInput> {}

export default function PhoneInput({ placeholder = 'Introduce tu número de teléfono', ...rest }: Props) {
  return <BasePhoneInput {...rest} placeholder={placeholder} />
}
