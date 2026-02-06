import { useState } from "react"

const Search = ({totalPost, onSearchChange}) => {
  const [search, setSearch] = useState("keyword");
  const handleChangesearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    onSearchChange(keyword);
  };

  return (
    <div>
      cari artikel: <input type="text" onChange={handleChangesearch} />
      <br />
      <small>
        Ditemukan <b>{totalPost}</b> data dengan pencarian kata <b>{search}</b>
      </small>
    </div>
  );
};

export default Search
