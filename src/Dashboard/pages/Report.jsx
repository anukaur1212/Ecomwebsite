import { Eye, Pencil, Trash2, Search, Plus, Download } from "lucide-react";

const products = [
  {
    id: 1,
    productName: "Dell Laptop",
    serialNumber: "DL-10245",
    quantity: 2,
    price: 85000,
    returnReason: "Repair or maintenance",
    organization: "ABC Technologies",
    fullName: "Rahul Sharma",
    email: "rahul@abc.com",
    phone: "9876543210",
    type: "RGP",
    expectedReturnDate: "2026-11-10",
    address: "Mohali, Punjab, India",
    note: "Handle with care",
    status: "Approved",
  },
  {
    id: 2,
    productName: "Office Printer",
    serialNumber: "PR-20456",
    quantity: 1,
    price: 25000,
    returnReason: "Official work",
    organization: "XYZ Solutions",
    fullName: "Priya Verma",
    email: "priya@xyz.com",
    phone: "9876501234",
    type: "NRGP",
    expectedReturnDate: null,
    address: "Chandigarh, India",
    note: "Permanent transfer",
    status: "Pending",
  },
];

const Report = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f4] p-4 sm:p-6 absolute left-65 -top-160 w-315">

      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#245b3e]">
            Gate Pass Records
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage product movements and gate pass information.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#245b3e] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#19472e]">
          <Plus size={18} />
          Create Gate Pass
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#e0ebe0] bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Gate Passes</p>
          <h2 className="mt-2 text-2xl font-bold text-[#245b3e]">
            {products.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#e0ebe0] bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Returnable (RGP)</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            {products.filter((p) => p.type === "RGP").length}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#e0ebe0] bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Non-Returnable (NRGP)</p>
          <h2 className="mt-2 text-2xl font-bold text-orange-600">
            {products.filter((p) => p.type === "NRGP").length}
          </h2>
        </div>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-2xl border border-[#e0ebe0] bg-white shadow-sm">

        {/* Search and Actions */}
        <div className="flex flex-col justify-between gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center">

          <div className="relative w-full sm:max-w-sm">
            <Search
              size={18}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              placeholder="Search product, serial no..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pr-4 pl-10 text-sm outline-none transition focus:border-[#56805d] focus:ring-2 focus:ring-[#56805d]/10"
            />
          </div>

        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1900px] border-collapse text-left">

            <thead className="bg-[#f3f7f2]">
              <tr className="text-xs font-bold uppercase tracking-wide text-[#42654b]">
                <th className="px-5 py-4">#</th>
                <th className="px-5 py-4">Product Details</th>
                <th className="px-5 py-4">Serial Number</th>
                <th className="px-5 py-4">Qty</th>
                <th className="px-5 py-4">Estimated Price</th>
                <th className="px-5 py-4">Return Reason</th>
                <th className="px-5 py-4">Organization</th>
                <th className="px-5 py-4">Contact Person</th>
                <th className="px-5 py-4">Email / Phone</th>
                <th className="px-5 py-4">Pass Type</th>
                <th className="px-5 py-4">Expected Return</th>
                <th className="px-5 py-4">Destination Address</th>
                <th className="px-5 py-4">Notes</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="transition hover:bg-[#f8fbf7]"
                >
                  <td className="px-5 py-5 text-sm text-gray-500">
                    {index + 1}
                  </td>

                  <td className="px-5 py-5">
                    <p className="font-semibold text-gray-800">
                      {product.productName}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      ID: GP-{String(product.id).padStart(4, "0")}
                    </p>
                  </td>

                  <td className="px-5 py-5">
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      {product.serialNumber}
                    </span>
                  </td>

                  <td className="px-5 py-5 text-sm text-gray-700">
                    {product.quantity}
                  </td>

                  <td className="px-5 py-5 text-sm font-semibold text-gray-800">
                    ₹{product.price.toLocaleString("en-IN")}
                  </td>

                  <td className="px-5 py-5 text-sm text-gray-600">
                    {product.returnReason}
                  </td>

                  <td className="px-5 py-5 text-sm font-medium text-gray-700">
                    {product.organization}
                  </td>

                  <td className="px-5 py-5 text-sm text-gray-700">
                    {product.fullName}
                  </td>

                  <td className="px-5 py-5">
                    <p className="text-sm text-gray-700">
                      {product.email}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {product.phone}
                    </p>
                  </td>

                  <td className="px-5 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${product.type === "RGP"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-orange-50 text-orange-700"
                        }`}
                    >
                      {product.type}
                    </span>
                  </td>

                  <td className="px-5 py-5 text-sm text-gray-600">
                    {product.expectedReturnDate || "Not applicable"}
                  </td>

                  <td className="max-w-48 px-5 py-5 text-sm text-gray-600">
                    {product.address}
                  </td>

                  <td className="max-w-40 px-5 py-5 text-sm text-gray-500">
                    {product.note || "—"}
                  </td>

                  <td className="px-5 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${product.status === "Approved"
                          ? "bg-green-50 text-green-700"
                          : "bg-amber-50 text-amber-700"
                        }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-5 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        title="View details"
                        className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        title="Edit"
                        className="rounded-lg p-2 text-[#245b3e] transition hover:bg-green-50"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        title="Delete"
                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-between gap-2 border-t border-gray-100 px-5 py-4 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>Showing {products.length} gate pass records</p>

          <p className="text-xs">
            Scroll horizontally to view all columns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;