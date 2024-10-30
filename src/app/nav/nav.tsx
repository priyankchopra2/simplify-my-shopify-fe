
// import * as React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"
import styles from "./nav.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../../components/ui/button";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  MessageSquareMore,
  ChartBarBig,
  MessageCircleQuestion,
  BadgeDollarSign,
  Flame,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "SMS Pricing",
    url: "/sms-pricing",
    icon: MessageSquareMore,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartBarBig,
  },
  {
    title: "FAQ",
    url: "/faqs",
    icon: MessageCircleQuestion,
  },
  {
    title: "Subscription",
    url: "/subscriptions",
    icon: BadgeDollarSign,
  },
  ,
  {
    title: "Firebase",
    url: "/firebase",
    icon: Flame,
  },
];

export function NavigationMenuDemo() {
  const [pathUrl, setPathUrl] = useState(window.location.pathname);

  let handleChangeUrl = (url) => {
    {
      setPathUrl(window.location.pathname)
      setPathUrl(url);
    }
  };

  useEffect(() => {}, [pathUrl]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <div className="mb-4 flex items-center [&>a:first-child]:text-primary">
          {items.map((item) => (
              <Badge
            //  className="w-full"
            // className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary"
            // className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"   
            className={pathUrl == item.url ? 
              'flex h-7 items-center justify-center rounded-full px-7 mt-5  text-center text-sm transition-colors hover:text-primary text-muted-foreground'
              :'flex h-7 items-center justify-center rounded-full px-7 mt-5  text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary'
            }

              variant="secondary"
                onClick={() => handleChangeUrl(item.url)}
                // isActive={pathUrl == item.url ? true : false}
              >
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
            </Badge>
          ))}
          </div>
          {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger> */}

          {/* <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
