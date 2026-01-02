const Layanan = ({namaLayanan, keterangan, gambar}) => {
  return (
    <div>
      {/* <h4>SPECT SCAN</h4>
      <p>
        SPECT scan merupakan salah satu inovasi dalam kedokteran nuklir yang
        dapat mengevaluasi kondisi tubuh Sahabat MIKA dan mendeteksi kanker
        secara lebih akurat.
      </p>
      <h4>PET SCAN</h4>
      <p>
        PET scan merupakan salah satu inovasi dalam kedokteran nuklir yang dapat
        mendeteksi kanker secara lebih akurat.
      </p>
      <h4>EYECENTRIC</h4>
      <p>Layanan ini dirancang untuk memberikan solusi menyeluruh bagi kesehatan mata Anda dengan teknologi terkini dan penanganan medis terbaik</p>
      <h4>NEURO & NEUROSUGERY</h4>
      <p>Layanan Unggulan Neuro & Neurosurgery di HMC: Menyongsong Kesehatan Otak</p>
      <h4>UROLOGI</h4>
      <p>Spesialis Urologi adalah dokter yang menangani gangguan yang terjadi di saluran kemih dan reproduksi pria. Beberapa penyakit yang diperiksa spesialis urologi antara lain uretra, kelenjar adrenal, ureter, ginjal, dan lainnya.</p>
      <h4>LAYANAN JANTUNG & BEDAH JANTUNG</h4>
      <p>Layanan Unggulan Jantung & Bedah Jantung RS Premier Jatinegara Komprehensif, Modern, dan Mengutamakan Keselamatan Pasien</p> */}
      <ul>
        <img src= {gambar} alt="" />
        <li>Nama Layanan : {namaLayanan} </li>
        <li>Keterangan : {keterangan} </li>
      </ul>
    </div>
  );
};

export default Layanan;
