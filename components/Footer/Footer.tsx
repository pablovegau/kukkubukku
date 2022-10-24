import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./styles"
import { Icon } from "components/Icon"

function Footer() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">
            <Icon type={Icon.TYPE.HOME} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">
            <Icon type={Icon.TYPE.RECIPES} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">
            <Icon type={Icon.TYPE.CALENDAR} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">
            <Icon type={Icon.TYPE.SHOPPING_LIST} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Footer;
