import React from 'react'

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const maxVisible = 5  // max buttons to show at a time

  let startPage = Math.max(currentPage - Math.floor(maxVisible / 2), 1)
  let endPage = startPage + maxVisible - 1

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(endPage - maxVisible + 1, 1)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-200"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-md transition duration-200 ${
            currentPage === page
              ? 'bg-blue-700 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-200"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
