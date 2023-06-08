export interface IProps {
  children?: React.ReactNode;
}

export interface IMenuLink {
  id: string;
  title: string;
  icon?: string;
  slug?: string;
  submenu?: IMenuLink[];
}

export interface ISidebarLinksProps extends IProps {
  menu: IMenuLink[];
}

export interface ISidebarSublinksProps extends IProps, IMenuLink {}
