const Footer = () => {
  return (
    <footer className="container mx-auto px-5 sm:px-10">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/rody-huancas/vizgit"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          VizGit.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
