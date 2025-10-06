import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const getFromLs = () => {
  const storedBook = localStorage.getItem("ReadedBOOk");
  if (storedBook) {
    return JSON.parse(storedBook);
  } else {
    return [];
  }
};

const setItemToLs = (id) => {
  const alreadyStored = getFromLs();
  if (alreadyStored.includes(id)) {
Swal.fire("Item Already in List");

  } else {
    alreadyStored.push(id);
    const toBeSet = JSON.stringify(alreadyStored);
    localStorage.setItem("ReadedBOOk", toBeSet);
    Swal.fire({
      title: "Item Added",
      icon: "success",
      draggable: true,
    });
  }
};
export { setItemToLs, getFromLs };
