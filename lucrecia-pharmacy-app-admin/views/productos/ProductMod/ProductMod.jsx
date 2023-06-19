{/*import ProductEdit from "./ProdEdit";
import ProductAdd from "./ProdAdd";
import ProductDelete from "./ProdDelete";*/}
import { FaPlus, FaTrash, FaPen } from 'react-icons/fa';

const ProductMod = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button btn btn-success">
        <FaPlus />
      </button>
      <button className="sidebar-button btn btn-danger">
        <FaTrash />
      </button>
      <button className="sidebar-button btn btn-primary">
        <FaPen />
      </button>
    </div>
  );
}
export default ProductMod