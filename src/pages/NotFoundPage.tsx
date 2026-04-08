import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <Container width="narrow">
      <div className="not-found">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">This lane is empty</h1>
        <p className="not-found__text">
          The page you wanted is not in our guide — let’s take you back to the pink city
          glow.
        </p>
        <Button to="/">Return home</Button>
      </div>
    </Container>
  )
}
