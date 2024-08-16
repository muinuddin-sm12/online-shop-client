/* eslint-disable react/prop-types */
const Paginations = ({ page, totalPages, setPage }) => {
    return (
      <div className="flex justify-center mt-4">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 mx-2"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 mx-2"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Paginations;