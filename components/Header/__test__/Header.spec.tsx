import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { Header } from '../'
import { Tool } from '../Tool'

test('renders with the correct text', () => {
  render(
    <Header auth={{ user: null }}>
      <Tool
        navigateTo={{
          pathname: '/shoppingLists/editor',
        }}
        iconType={Tool.ICON_TYPE.PLUS}
      />
    </Header>,
  )

  const logo = screen.getByRole('figure')
  const themeSwitch = screen.getByRole('button', { name: /theme switch sun icon theme switch sun moon/i })
  const navigation = screen.queryByRole('list')

  expect(logo).toBeInTheDocument()
  expect(themeSwitch).toBeInTheDocument()
  expect(navigation).not.toBeInTheDocument()
})
