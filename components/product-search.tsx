"use client"

import { useState, useEffect } from "react"

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<any[]>([])

  // Example: fetch data on the client
  useEffect(() => {
    // fetch("/api/products")
    //   .then((res) => res.json())
    //   .then((data) => setResults(data))
  }, [])

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    // Filter or search logic here
  }

  return (
    <div className="product-search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Search
        </button>
      </form>

      <div className="mt-4">
        {results.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {results.map((product) => (
              <li key={product.id} className="py-1">
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
