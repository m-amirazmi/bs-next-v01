import { IProps } from "@/utils/types";
import styles from "@/styles/pages/admin-layout.module.css";
import Sidebar from "@/components/general/sidebar";

export const metadata = {
  title: "Burger Street | Admin",
  description: "This is a burger street admin dashboard",
};

export default function AdminLayout({ children }: IProps) {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </main>
  );
}
