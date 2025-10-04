// app/notes/filter/layout.tsx
// app/notes/filter/layout.tsx
import css from "./layout.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.layout}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <main className={css.content}>{children}</main>
    </section>
  );
};

export default NotesLayout;
