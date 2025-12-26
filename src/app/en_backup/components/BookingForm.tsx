import BaseBookingForm from '../../../components/BookingForm'
import ENBookingConfirmationPopup from './BookingConfirmationPopup'

export default function BookingForm(props: React.ComponentProps<typeof BaseBookingForm>) {
  return (
    <BaseBookingForm
      {...props}
      language="en"
      ConfirmationPopup={ENBookingConfirmationPopup}
    />
  )
}
