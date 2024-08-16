/* eslint-disable react/prop-types */
const Paginations = ({ page, totalPages, setPage }) => {
    return (
      <div className="flex justify-center items-center mt-4 py-6">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
          className="px-4 py-2  border border-[#135D66] rounded-l-full text-[#135D66] font-medium mx-2"
        >
          Previous
        </button>
        <span className="font-semibold">Page {page} of {totalPages}</span>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
          className="px-4 py-2  border border-[#135D66] rounded-r-full text-[#135D66] font-medium mx-2"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Paginations;