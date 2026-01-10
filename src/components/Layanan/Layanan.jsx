import "./Layanan.css";

const Layanan = ({ namaLayanan, keterangan, gambar }) => {
  return (
    <div className="cardLayan">
      <div className="cardLayanH">
        <img src={gambar} alt="" />
      </div>
      <div className="cardLayanB">
        <ul>
          <li>Nama Layanan : {namaLayanan} </li>
          <li>Keterangan : {keterangan} </li>
        </ul>
        <button className="btnLayan">Selengkapnya</button>
      </div>
    </div>
  );
};

export default Layanan;
