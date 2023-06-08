import { ISidebarLinksProps } from "@/utils/types";
import SidebarSublinks from "./sidebar-sublinks";
import styles from "@/styles/components/general-sidebar-links.module.css";

export default function SidebarLinks({ menu }: ISidebarLinksProps) {
  return (
    <div className={styles.container}>
      {menu.map((m) => (
        <SidebarSublinks key={m.id} {...m} />
      ))}
    </div>
  );
}
