// components/Header/Header.tsx

// import css from "./Header.module.css";

// const Header = () => {
//   return (
//     <header className={css.header}>
//       <h2>NoteHub</h2>
//       <nav>
//         <ul className={css.navigation}>
//           <li>Home</li>
//           <li>Notes</li>
//           <li>Profile</li>
//           <li>About</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// components/Header/Header.tsx

// import css from "./Header.module.css";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className={css.header}>
//       <Link href="/" aria-label="Home">
//         NoteHub
//       </Link>
//       <nav aria-label="Main Navigation">
//         <ul className={css.navigation}>
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/notes">Notes</Link>
//           </li>
//           <li>
//             <Link href="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import Link from "next/link";
import { getCategories } from "@/lib/api";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import css from "./Header.module.css";

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
