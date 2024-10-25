import { Calendar, Home, Inbox, Search, Settings,MessageSquareMore, ChartBarBig, MessageCircleQuestion, BadgeDollarSign, Flame } from "lucide-react"
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
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
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
