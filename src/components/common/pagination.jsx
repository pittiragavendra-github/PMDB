import React from "react";
import _ from 'lodash';
const Pagination = (props) => {
  const { itemsCount, pageSize,currentPage ,onPageChange} = props;
 
  console.log('cuurnet page',currentPage);
  
   const pageCount = Math.ceil(itemsCount / pageSize) ;//3

  const pages =  _.range(1,pageCount +1 );
  // for (let i = 1; i < pageCount; i++) {
  //   pages[i] = i ;
  // }
  if(pageCount === 1){
    return null;
  }
  console.log(pages);
  console.log(pageCount);

  return (
    <React.Fragment>
      <nav aria-label="...">
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className={page === currentPage ? 'page-item active': 'page-item'} >
              <a className="page-link"  tabIndex="-1" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
