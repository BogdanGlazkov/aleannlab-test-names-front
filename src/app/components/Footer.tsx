const Footer = () => {
  return (
    <footer className="border-t p-4 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl flex-col sm:flex-row sm:justify-between">
        <address>
          <a href="/">
            <h2 className="text-xl font-medium">Name Rank App</h2>
          </a>
          <br />
          Created by Bogdan Glazkov
          <br />
          Email:
          <a href="mailto:bglazkov@i.ua"> bglazkov@i.ua</a>
          <br />
          Phone: <a href="tel:+380964556219">+38 (096) 455-62-19</a>
        </address>
        <div className="flex flex-col sm:gap-2 mt-4 sm:mt-0">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
