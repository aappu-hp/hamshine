import { Suspense } from "react"
import ProductList from "@/components/products/product-list"
import CustomSolution from "@/components/products/custom-solution"

export default function ProductsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-amber-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Solar Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality solar products designed to meet your energy needs.
          </p>

        </div>
      </section>

      {/* Wrap ProductList in Suspense */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        }
      >
        <ProductList />
      </Suspense>

      {/* Custom Solution Section */}
      <div id="custom-solution">
        <CustomSolution />
      </div>
    </>
  )
}
