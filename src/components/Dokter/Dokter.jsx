import "./Dokter.css";
import "../../App.css"

const Dokter = ({ nama, umur, spesialis, imgDok }) => {
  return (
    <div className="cardDok">
      <div className="card-pala">
        <img src={imgDok} alt="" />
      </div>
      <div className="card-badan">
        <ul>
          <li>Nama: {nama} </li>
          <li>Umur: {umur} </li>
          <li>Spesialis: {spesialis} </li>
        </ul>
      </div>
    </div>
  );
};

export default Dokter;
