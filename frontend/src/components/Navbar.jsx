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

        <>

            <NavigationMenu className="p-2">
                <NavigationMenuList>
                    <NavigationMenuItem className="p-1">
                        {/* About the project */}
                        <Link to="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <img src={wardrobeLogo} alt='Wardrobe Logo' />
                            </NavigationMenuLink>
                        </Link>
                        {/* Outfit of the day - need to fix the links. This will have the carousel */}
                        <Link to="/projects">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                OOTD
                            </NavigationMenuLink>
                        </Link>
                        {/* Dashboard */}
                        <Link to="/about">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                        {/* A place to leave reviews on the items */}
                        <Link to="/customer-reviews">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Reviews
                            </NavigationMenuLink>
                        </Link>
                        {/* All Items grid layout with options to filter */}
                        <NavigationMenuTrigger>All Items</NavigationMenuTrigger>
                            <NavigationMenuContent className='p-5'>
                                <NavigationMenuItem>All Items</NavigationMenuItem>
                                <NavigationMenuItem>Tops</NavigationMenuItem>
                                <NavigationMenuItem>Bottoms</NavigationMenuItem>
                                <NavigationMenuLink>
                                    <Link to='/contact'></Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>




            {/* <nav>
                <Link to='/'>
                    <img src={wardrobeLogo} alt='Wardrobe Logo' />
                </Link>
                <Link to='projects'>Projects</Link>
                <Link to='about'>About</Link>
                <Link to='customer-reviews'>Reviews</Link>
                <Link to='contact'>Contact</Link>
            </nav> */}
        </>
    );
};
