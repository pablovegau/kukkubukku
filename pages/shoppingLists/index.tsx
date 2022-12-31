// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react'

import { AppLayout } from 'components/AppLayout'
import { Tool } from 'components/Header/Tool'
import {
  Container,
  NoShoppingLists,
  List,
  ListItem,
  CheckboxRoot,
  CheckboxIndicator,
  Label,
  ListContainer,
} from 'styles/pages/shoppingLists/styles'
import { useAuth } from 'services/auth'
import { Icon } from 'components/Icon'
import { SectionTitle } from 'styles/pages/recipes'
import { getFormattedShoppingListsDatabase } from 'provider/db/shoppingList/read'
import { updateShoppingListItemStateById } from 'services/db/shoppingList/write'
import { PagesContainer } from 'styles/pages/sharedStyles'

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
    await updateShoppingListItemStateById(!value, itemId)
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
          <ListContainer key={shoppingList.shoppingListName}>
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
          </ListContainer>
        ))}
      </>
    )
  }

  return (
    <AppLayout title=" - Listas de la compra" Tools={Tools}>
      <PagesContainer>
        <Container>{content}</Container>
      </PagesContainer>
    </AppLayout>
  )
}
