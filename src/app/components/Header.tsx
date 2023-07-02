import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-10 h-20 bg-teal-700 text-white p-4 border-b">
      <a href="/">
        <h1 className="text-3xl font-medium">Names Rank</h1>
      </a>
    </header>
  );
};

export default Header;
