// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

import { AppLayout } from 'components/AppLayout'
import { Tool } from 'components/Header/Tool'
import { supabase } from 'provider/supabaseClient'
import { Container, NoShoppingLists } from 'styles/pages/shoppingLists/styles'
import { useAuth } from 'services/auth'
import { Icon } from 'components/Icon'
import { SectionTitle } from 'styles/pages/recipes'
import { getFormattedShoppingListsDatabase } from 'provider/db/shoppingList/read'

export default function ShoppingLists() {
  const { user } = useAuth()
  const [shoppingLists, setShoppingLists] = useState([])
  const [shoppingListLoading, setShoppingListLoading] = useState(true)

  async function getShoppingListIngredients() {
    const shoppingLists = await getFormattedShoppingListsDatabase(user?.id)

    setShoppingListLoading(false)

    return shoppingLists
  }

  useEffect(() => {
    getShoppingListIngredients().then(setShoppingLists)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const Tools = () => {
    return (
      <>
        <Tool
          navigateTo={{
            pathname: '/shoppingLists/editor',
          }}
          iconType={Tool.ICON_TYPE.PLUS}
        />
      </>
    )
  }

  async function handleCheckChange(itemId, value) {
    supabase.from('ShoppingListItem').update({ isChecked: !value }).eq('id', itemId).select()
  }

  let content

  if (shoppingListLoading) {
    content = <div>Loading...</div>
  }

  if (!shoppingListLoading && !shoppingLists?.length) {
    content = <NoShoppingLists>Aun no tienes ninguna lista de la compra creada</NoShoppingLists>
  }

  if (!shoppingListLoading && shoppingLists?.length) {
    content = (
      <>
        {shoppingLists.map((shoppingList) => (
          <>
            <SectionTitle>{shoppingList.shoppingListName}</SectionTitle>
            <List>
              {shoppingList.shoppingListItems.map((shoppingListItem, index) => {
                return (
                  <ListItem key={shoppingListItem.name}>
                    <CheckboxRoot
                      id={`${shoppingList.shoppingListName}-${shoppingListItem.name}-${index}`}
                      onCheckedChange={() => handleCheckChange(shoppingListItem.id, shoppingListItem.isChecked)}
                      defaultChecked={shoppingListItem.isChecked}
                    >
                      <CheckboxIndicator className="CheckboxIndicator">
                        <Icon type={Icon.TYPE.CHECK} size={12} fillColor="--kkbk--color--background--app" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                    <Label htmlFor={`${shoppingList.shoppingListName}-${shoppingListItem.name}-${index}`}>
                      {`${shoppingListItem.name}`}
                      {shoppingListItem.amount || shoppingListItem.measurement ? (
                        <span>{` - ${shoppingListItem.amount} ${shoppingListItem.measurement}`}</span>
                      ) : null}
                    </Label>
                  </ListItem>
                )
              })}
            </List>
          </>
        ))}
      </>
    )
  }

  return (
    <AppLayout title=" - Listas de la compra" Tools={Tools}>
      <Container>{content}</Container>
    </AppLayout>
  )
}

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-bottom: var(--kkbk--spacing--32);

  li:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--12);
  }
`

const ListItem = styled.li`
  display: flex;
  align-items: start;
`

const CheckboxRoot = styled(Checkbox.Root)`
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

const CheckboxIndicator = styled(Checkbox.Indicator)`
  padding: 1px;
`

const Label = styled.label`
  padding-left: var(--kkbk--spacing--8);

  span {
    color: var(--kkbk--base-color--gray--50);
  }
`
