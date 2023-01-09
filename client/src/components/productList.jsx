import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { getProductList } from "../requestAPI/api";

const ProductList = () => {
  let searchRef = useRef();
  const { productList, total } = useSelector((state) => state.productList);

  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchKeyword, setsearchKeyword] = useState("0");

  useEffect(() => {
    getProductList(pageNo, perPage, searchKeyword);
  }, [pageNo, perPage, searchKeyword]);

  const handlePageClick = (e) => {
    setPageNo(e.selected + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let searchInputValue = searchRef.value;
    if (searchInputValue.length === 0) {
      setsearchKeyword("0");
      console.log(searchKeyword);
    } else {
      setPageNo(1);
      setsearchKeyword(searchInputValue);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <h4>My Product List</h4>
                  </div>
                  <div className="col-2">
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        onChange={(e) => setPerPage(e.target.value)}
                      >
                        <option value="5">5 per page</option>
                        <option value="10">10 per page</option>
                        <option value="20">20 per page</option>
                        <option value="50">50 per page</option>
                        <option value="100">100 per page</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
                    <form className="d-flex" onSubmit={handleSearch}>
                      <input
                        ref={(input) => (searchRef = input)}
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-success btn-without-mb"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div
                      className="table-responsive data-table"
                      style={{ height: "444px" }}
                    >
                      <table className="table">
                        <thead className="sticky-top bg-white">
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Product
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Price
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              stock
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              code
                            </th>
                            <th className="text-secondary opacity-7"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {productList.map((plist, i) => (
                            <tr key={i}>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      alt=""
                                      src={plist.image}
                                      className="avatar avatar-sm me-3"
                                    />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-xs">
                                      {plist.title}
                                    </h6>
                                    <p className="text-xs text-secondary mb-0">
                                      {plist.category}
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <p className="text-xs font-weight-bold mb-0">
                                  {plist.price}
                                </p>
                                <p className="text-xs text-secondary mb-0">
                                  {plist.brand}
                                </p>
                              </td>

                              <td>
                                <p className="text-xs font-weight-bold mb-0">
                                  {plist.stock}
                                </p>
                              </td>

                              <td>
                                <p className="text-xs font-weight-bold mb-0">
                                  {plist.product_code}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-5">
                    <nav>
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={parseInt(total / perPage)}
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
