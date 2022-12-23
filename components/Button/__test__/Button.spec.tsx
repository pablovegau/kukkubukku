import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

const onClickMock = jest.fn()

test('renders with the correct text', () => {
  render(<Button onClick={onClickMock}>tiramisu</Button>)

  const button = screen.getByRole('button', { name: /tiramisu/i })
  expect(button).toBeInTheDocument()
})

test('calls the onClick function when is clicked', async () => {
  const user = userEvent.setup()

  render(<Button onClick={onClickMock}>tiramisu</Button>)

  const button = screen.getByRole('button', { name: /tiramisu/i })
  await user.click(button)

  expect(onClickMock).toHaveBeenCalledTimes(1)
})

test('is disabled', () => {
  render(
    <Button onClick={onClickMock} disabled>
      tiramisu
    </Button>,
  )

  const button = screen.getByRole('button', { name: /tiramisu/i })
  expect(button).toBeDisabled()
})
