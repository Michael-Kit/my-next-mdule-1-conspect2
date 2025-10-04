import css from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <h2 className={css.header}>Welcome to Home</h2>
        <p className={css.text}>This is the home page.</p>
      </div>
    </>
  );
}
