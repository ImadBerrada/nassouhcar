import BaseGoogleReviews from '../../../components/GoogleReviews'

export default function GoogleReviews(props: { placeId: string; apiKey?: string }) {
  return <BaseGoogleReviews {...props} language="es" />
}
