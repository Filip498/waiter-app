import {React} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TableSummary = ({id, status}) => {
  return (
    <>
      <div className="d-flex flex-wrap align-items-center my-4 ">
        <h3 className="col-12 text-center col-sm-3 text-sm-start col-lg-2 m-0">Table {id}</h3>
        <p className="col-12 text-center col-sm-6 text-sm-start col-lg-7 m-0 ">
          <span className="fw-bold">Status: </span>
          {status}
        </p>
        <div className="col-12 col-sm-3 col-lg-3 my-1 d-flex justify-content-center justify-content-sm-end">
          <Link to={'/table/' + id.toString()}>
            <Button>Show more</Button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TableSummary;