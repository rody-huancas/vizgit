const Footer = () => {
  return (
    <footer className="container mx-auto px-5 sm:px-0 text-white flex flex-col sm:flex-row items-center justify-between py-6 border-t border-t-slate-800 mt-10">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://novtiq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Novtiq.
        </a>
      </p>

      <p>
        Desarrollado por{" "}
        <a
          href="https://github.com/rody-huancas"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Rody Huancas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
