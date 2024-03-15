//import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Cross2Icon,
  HomeIcon,
  PersonIcon,
  FileIcon,
  ReaderIcon,
  ArchiveIcon,
  RocketIcon,
  //DoubleArrowDownIcon,
} from "@radix-ui/react-icons";
import RoundAvatar from "../avatar/avatar";
import SocialLinks from "../social-links/social-links";
import {
  avatarButton,
  avatarContainer,
  avatarSize,
  collapsibleContent,
  collapsibleRoot,
  iconButton,
  iconImages,
  linkData,
  linkText,
  menuContent,
  menuItem,
  menuList,
  navIconImages,
  navigationLinks,
  //separatorRoot,
  socialMargins,
  userInfoContent,
  //triggerAvatarSize,
  userName,
} from "./top-menu.css";
//import * as Separator from "@radix-ui/react-separator";

const Link = ({ ...props }) => (
  <NavigationMenu.Link asChild>
    <>
      <a href={props.href}>
        <div className={linkData}>
          <div>{props.children}</div>
          <div className={linkText}>
            <span>{props.name}</span>
          </div>
        </div>
      </a>
    </>
  </NavigationMenu.Link>
);
/*
const AvatarOpenSymbol = () => (
  <>
    <RoundAvatar avatarSize={triggerAvatarSize} /> <DoubleArrowDownIcon />
  </>
);*/

export interface TopMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CollapsibleTopMenu = (props: TopMenuProps) => {

  const closeTrigger = () => {
    props.setOpen(false);
  }

  return (
    <>
    <Collapsible.Root
      className={collapsibleRoot}
      open={props.open}
      onOpenChange={props.setOpen}
    >
      <Collapsible.Content className={collapsibleContent}>
        <div className={avatarContainer}>
          
        </div>
        <div className={menuContent}>
          <div className={userInfoContent}>
            <div className={userName}>
              <span>Anup Singh</span>
            </div>
            <SocialLinks marginClass={socialMargins} iconImages={iconImages} />
          </div>
          <div className={navigationLinks}>
            <NavigationMenu.Root orientation="horizontal">
              <NavigationMenu.List className={menuList}>
                <NavigationMenu.Item className={menuItem}>
                  <Link href="/" name="Home">
                    <HomeIcon className={navIconImages} />
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={menuItem}>
                  <Link href="/" name="About">
                    <PersonIcon className={navIconImages} />
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={menuItem}>
                  <Link href="/" name="Resume">
                    <FileIcon className={navIconImages} />
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={menuItem}>
                  <Link href="/" name="Portfolio">
                    <ReaderIcon className={navIconImages} />
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={menuItem}>
                  <Link href="/" name="Projects">
                    <ArchiveIcon className={navIconImages} />
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={menuItem}>
                  <Link href="/" name="Self Initiatives">
                    <RocketIcon className={navIconImages} />
                  </Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </div>
      </Collapsible.Content>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Collapsible.Trigger asChild>
          <button className={iconButton}>
            {props.open ? <Cross2Icon /> : ""}
          </button>
        </Collapsible.Trigger>
      </div>
    </Collapsible.Root>
    <button onClick={closeTrigger} className={avatarButton}>
    <RoundAvatar avatarSize={avatarSize} />
    </button>
    </>
  );
};

export default CollapsibleTopMenu;
