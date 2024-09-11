import Pagination from "react-bootstrap/Pagination";

function Paginate() {
  return (
    <Pagination className="ml-lg-5 pl-lg-5">
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

export default Paginate;
