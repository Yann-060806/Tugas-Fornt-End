import "./Footer.css"

const Footer = ({nama}) => {
  return (
    <footer className="foot">
      <h3>Copyright &copy; 2026 Developed by {nama}</h3>
    </footer>
  );
};

export default Footer;