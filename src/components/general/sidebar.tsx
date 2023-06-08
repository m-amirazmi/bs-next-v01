import styles from "@/styles/components/general-sidebar.module.css";
import SidebarLinks from "./sidebar-links";
import menuData from "@/data/menu.json";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        {menuData.map((m) => (
          <div className={styles.menu} key={m.id}>
            <h5 className={styles.category}>{m.category}</h5>
            {m.links && <SidebarLinks menu={m.links} />}
          </div>
        ))}
      </div>
    </aside>
  );
}
