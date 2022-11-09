import { Link } from "react-router-dom";

export default function Products() {
  return (
    <ul className="products">
      <li>
        <Link to="product-1">Product 1</Link>
      </li>
      <li>
        <Link to="product-2?color=green">Product 2 and query param</Link>
      </li>
    </ul>
  );
}
