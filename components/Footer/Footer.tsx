// @ts-nocheck

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuMyLink } from './styles';
import { Icon } from "components/Icon"
import Link from "next/link";
import { MyLink } from "components/MyLink";

function Footer() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <Link href="/"  passHref legacyBehavior>
            <MyLink>
              <NavigationMenuMyLink>
                <Icon type={Icon.TYPE.HOME} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
              </NavigationMenuMyLink>
            </MyLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/"  passHref legacyBehavior>
            <MyLink>
              <NavigationMenuMyLink>
                <Icon type={Icon.TYPE.RECIPES} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
              </NavigationMenuMyLink>
            </MyLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/calendar"  passHref legacyBehavior>
            <MyLink>
              <NavigationMenuMyLink>
              <Icon type={Icon.TYPE.CALENDAR} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
              </NavigationMenuMyLink>
            </MyLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/shoppingLists"  passHref legacyBehavior>
            <MyLink>
              <NavigationMenuMyLink>
                <Icon type={Icon.TYPE.SHOPPING_LIST} size={24} fillColor="--kkbk--color--emphasis--secondary"/>
              </NavigationMenuMyLink>
            </MyLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Footer;
