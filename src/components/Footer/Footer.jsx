import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>PeTIK Niaga</h2>
          <p>Platform belanja online dengan layanan terbaik.</p>
        </div>

        <div className="footer-links">
          <h4>Menu</h4>
          <ul>
            <li>Beranda</li>
            <li>Kategori</li>
            <li>Produk</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Kontak</h4>
          <p>Email: support@petikniaga.com</p>
          <p>Telp: +62 812-3456-7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PeTIK Niaga. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
