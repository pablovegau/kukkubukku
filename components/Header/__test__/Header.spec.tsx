import { render, screen } from '@testing-library/react'
import { Header } from '../'
import { Tool } from '../Tool'

test("when there's no user logged in, render the header as expected", () => {
  render(
    <Header auth={{ user: null }}>
      <Tool
        navigateTo={{
          pathname: '/shoppingLists/editor',
        }}
        iconType={Tool.ICON_TYPE.PLUS}
        label="Add new recipe"
      />
    </Header>,
  )

  const logo = screen.getByRole('figure')
  const recipesNavLink = screen.queryByRole(/recetas/i)
  const themeSwitch = screen.getByRole('button', { name: /theme switch sun icon theme switch sun moon/i })
  const tool = screen.queryByRole('link', { name: /add new recipe/i })
  const avatar = screen.queryByRole('link', { name: /go to log in/i })

  expect(logo).toBeInTheDocument()
  expect(recipesNavLink).not.toBeInTheDocument()
  expect(themeSwitch).toBeInTheDocument()
  expect(tool).not.toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
})

test("when there's user logged in, render the header as expected", () => {
  render(
    <Header auth={{ user: 'Mr Carbonara' }}>
      <Tool
        navigateTo={{
          pathname: '/shoppingLists/editor',
        }}
        iconType={Tool.ICON_TYPE.PLUS}
        label="Add new recipe"
      />
    </Header>,
  )

  const logo = screen.getByRole('figure')
  const themeSwitch = screen.getByRole('button', { name: /theme switch sun icon theme switch sun moon/i })
  const recipesNavLink = screen.getByText(/recetas/i)
  const tool = screen.getByRole('link', { name: /add new recipe/i })
  const avatar = screen.queryByRole('link', { name: /go to log in/i })

  expect(logo).toBeInTheDocument()
  expect(themeSwitch).toBeInTheDocument()
  expect(recipesNavLink).toBeInTheDocument()
  expect(tool).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
})
