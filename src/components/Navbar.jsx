import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$portfolio',
  borderRadius: 4,
  border: 8,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: "brightness(0.8)"
  }
})

export function Navbar() {
  return (
    <div>
      <Button>Entrar</Button>
    </div>
  )
}