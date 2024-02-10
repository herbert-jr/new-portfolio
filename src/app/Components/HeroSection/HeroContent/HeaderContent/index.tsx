import Container from './Container'
import Logo from './Logo'
import Navigation from './Navigation'

function HeaderContent() {
  return (
    <Container
      className="w-screen h-auto px-5 py-8 flex items-start justify-between
    fixed top-0 left-0 z-10"
    >
      <Logo />
      <Navigation />
    </Container>
  )
}

export default HeaderContent
