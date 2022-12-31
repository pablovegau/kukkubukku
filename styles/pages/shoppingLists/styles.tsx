import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const NoShoppingLists = styled.div`
  text-align: center;

  ${typography.heading.four}
`

export const ListContainer = styled.div`
  width: fit-content;
`

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-bottom: var(--kkbk--spacing--32);

  li:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--12);
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: start;
`

// TODO: create a component for this
export const CheckboxRoot = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  margin-top: 3px;
  border-radius: var(--kkbk--spacing--4);
  border: 1px solid var(--kkbk--base-color--gray--70);
  background-color: white;

  [data-state='checked'] {
    border-radius: var(--kkbk--spacing--4);
    background-color: var(--kkbk--color--emphasis--primary);
    border: 1px solid var(--kkbk--color--emphasis--primary);
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  padding: 1px;
`

export const Label = styled.label`
  padding-left: var(--kkbk--spacing--8);

  span {
    color: var(--kkbk--base-color--gray--50);
  }
`
