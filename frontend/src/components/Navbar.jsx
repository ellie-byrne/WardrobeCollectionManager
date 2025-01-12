import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import wardrobeLogo from '../assets/wardrobe-svgrepo-com.svg';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

  

  export const Navbar = () => {
    return (
      <NavigationMenu className="px-4">
        <NavigationMenuList className="flex items-left space-x-4">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <img src={wardrobeLogo} alt="Wardrobe Logo" className="h-8" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>All Items</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 w-auto min-w-[150px]">
              <ul className="p-2 space-y-1">
                <li>
                  <Link
                    to="/all-items"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    All Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tops"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    Tops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bottoms"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shoes"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    Shoes
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/projects">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                OOTD
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <Link to="/customer-reviews">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Reviews
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };