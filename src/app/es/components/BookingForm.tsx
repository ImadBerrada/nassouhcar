import BaseBookingForm from '../../../components/BookingForm'
import ESBookingConfirmationPopup from './BookingConfirmationPopup'

export default function BookingForm(props: React.ComponentProps<typeof BaseBookingForm>) {
  return (
    <BaseBookingForm
      {...props}
      language="es"
      ConfirmationPopup={ESBookingConfirmationPopup}
    />
  )
}
