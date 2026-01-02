const Dokter = ({nama, umur, spesialis,}) => {
    return(
        <div>
            <ul>
                <li>Nama: {nama} </li>
                <li>Umur: {umur} </li>
                <li>Spesialis: {spesialis} </li>
            </ul>
        </div>
    )
}

export default Dokter;