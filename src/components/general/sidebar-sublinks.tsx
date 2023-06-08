"use client";

import { ISidebarSublinksProps } from "@/utils/types";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/components/general-sidebar-sublinks.module.css";
import Link from "next/link";

export default function SidebarSublinks({
  title,
  submenu,
  icon,
  slug,
}: ISidebarSublinksProps) {
  const [open, setOpen] = useState(false);
  const currentPath = usePathname();

  const toggleSubMenu = () => setOpen(!open);

  const renderContent = () => {
    return (
      <>
        {icon ? (
          <i className={`bi bi-${icon}`}></i>
        ) : (
          <i className={`bi bi-circle-fill ${styles.dot}`}></i>
        )}
        <span>{title}</span>
        {submenu && submenu.length > 0 && (
          <div className={styles.chevron}>
            <i className={`bi bi-chevron-${open ? "down" : "right"}`}></i>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.container}>
      {!slug ? (
        <span
          className={`${styles.link} ${
            currentPath === slug ? styles.active : ""
          }`}
          onClick={toggleSubMenu}
        >
          {renderContent()}
        </span>
      ) : (
        <Link
          href={slug}
          className={`${styles.link} ${
            currentPath === slug ? styles.active : ""
          }`}
        >
          {renderContent()}
        </Link>
      )}

      {open &&
        submenu &&
        submenu.map((m) => <SidebarSublinks key={m.id} {...m} />)}
    </div>
  );
}
