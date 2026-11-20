import { Eye, Pencil, Trash2, Search, Plus, Download, ShieldCheck, Package, CheckCircle2, Clock3, X, IndianRupee, Hash, MapPin, RotateCcw, FileText, ChevronDown, ClipboardList } from "lucide-react";
import { useState } from "react";
import { CalendarDays, Check } from "lucide-react";
import { use } from "react";

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

const dateOptions = [
  { label: "Date", value: "all" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 3 Days", value: "last3" },
  { label: "Last 7 Days", value: "last7" },
  { label: "Last 10 Days", value: "last10" },
  { label: "Last 30 Days", value: "last30" },
  { label: "This Month", value: "thisMonth" },
];

const typeOptions = [
  { label: "All Types", value: "all" },
  { label: "RGP", value: "RGP" },
  { label: "NRGP", value: "NRGP" },
];

const Report = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [passType, setPassType] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [dateOpen, setDateOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState("");


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

      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {/* Total Gate Passes */}
        <div className="group relative overflow-hidden rounded-2xl border border-[#dce9dd] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#245b3e]/10">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 rounded-full bg-[#245b3e]/5 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Gate Passes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#245b3e]">
                {products.length}
              </h2>
              <p className="mt-2 text-xs text-gray-400">
                All registered gate passes
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#245b3e] to-[#56805d] text-white shadow-md shadow-[#245b3e]/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <ClipboardList size={25} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#245b3e] transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Returnable */}
        <div className="group relative overflow-hidden rounded-2xl border border-blue-100
         bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
         hover:shadow-blue-500/10">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7
           rounded-full bg-blue-500/5 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Returnable (RGP)
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-600">
                {products.filter((p) => p.type === "RGP").length}
              </h2>
              <p className="mt-2 text-xs text-gray-400">
                Items expected to return
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl 
            bg-gradient-to-br from-gray-500 to-gray-700 text-white shadow-md 
            shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 
            group-hover:scale-110">
              <RotateCcw size={25} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gray-500 transition-all 
          duration-500 group-hover:w-full" />
        </div>

        {/* Non-Returnable */}
        <div className="group relative overflow-hidden rounded-2xl border border-green-100
         bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1
          hover:shadow-lg hover:shadow-green-500/10">

          <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 
          rounded-full bg-green-500/5 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Non-Returnable (NRGP)
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-green-600">
                {products.filter((p) => p.type === "NRGP").length}
              </h2>
              <p className="mt-2 text-xs text-gray-400">
                Items not expected to return
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl
             bg-gradient-to-br from-green-400 to-green-800 text-white shadow-md 
             shadow-green-500/20 transition-transform duration-300 group-hover:rotate-6
              group-hover:scale-110">
              <Package size={25} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all
           duration-500 group-hover:w-full" />
        </div>

      </div>


      {/* Table Card */}
      <div className="overflow-hidden rounded-2xl border border-[#dce9dd] bg-white
       shadow-md shadow-[#245b3e]/5 transition-shadow duration-300 hover:shadow-lg 
       hover:shadow-[#245b3e]/10">


        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border 
        border-[#e0ebe0] bg-white shadow-sm">

          {/* Search and Actions */}
          <div className="grid grid-cols-3 w-[60%] gap-3 p-4 sm:flex-row sm:items-center">

            <div className="relative w-full sm:max-w-sm">
              <Search
                size={18}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                placeholder="   Search product"
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5
               text-sm font-medium text-gray-700 shadow-sm outline-none transition
                focus:border-[#56805d] focus:ring-4 focus:ring-[#56805d]/10"
              />
            </div>

            <div className="relative w-full sm:w-52">

              {/* Dropdown Trigger */}
              <button
                type="button"
                onClick={() => setTypeOpen(!typeOpen)}
                className="flex w-full items-center justify-between 
                rounded border border-gray-200 bg-gradient-to-b
               from-white to-[#f8fbf7] px-4 py-2.5 text-sm 
               font-medium text-gray-700 shadow-sm transition
               hover:border-[#a8c5ab] hover:shadow-md
               focus:border-[#56805d] focus:ring-4 focus:ring-[#56805d]/10">

                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#56805d]" />
                  {typeOptions.find((option) => option.value === passType)?.label || "Type"}
                </span>

                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 ${typeOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Dropdown Options */}
              {typeOpen && (
                <div className="absolute right-0 z-30 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/60">

                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Filter by type
                  </p>

                  {typeOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${passType === option.value
                        ? "bg-[#f0f7ef] font-semibold text-[#245b3e]"
                        : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >

                      <input
                        type="checkbox"
                        checked={passType === option.value}
                        onChange={() => {
                          setPassType(option.value);
                          setTypeOpen(false);
                        }}
                        className="h-4 w-4 cursor-pointer accent-[#245b3e]"
                      />

                      <span>{" "}{option.label}</span>


                    </label>
                  ))}
                </div>
              )}
            </div>


            <div className="relative w-full sm:w-52">
              {/* Dropdown Trigger */}
              <button
                type="button"
                onClick={() => setDateOpen(!dateOpen)}
                className="flex w-full rounded items-center justify-between border border-gray-200 bg-gradient-to-b from-white to-[#f8fbf7] px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-[#a8c5ab] hover:shadow-md focus:border-[#56805d] focus:ring-4 focus:ring-[#56805d]/10">
                <span className="flex items-center gap-2">
                  <CalendarDays size={17} className="text-[#56805d]" />
                  {dateOptions.find((option) => option.value === dateFilter)?.label || "Date"}
                </span>

                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${dateOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Options */}
              {dateOpen && (
                <div className="absolute right-0 z-30 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/60">
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Filter by date
                  </p>

                  {dateOptions.map((option) => (

                    <label
                      key={option.value}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${dateFilter === option.value
                        ? "bg-[#f0f7ef] font-semibold text-[#245b3e]"
                        : "text-gray-600 hover:bg-gray-50"
                        }`}>

                      <input
                        type="checkbox"
                        checked={dateFilter === option.value}
                        onChange={() => {
                          setDateFilter(option.value);
                          setDateOpen(false);
                        }}
                        className="h-4 w-4 cursor-pointer accent-[#245b3e]"
                      />
                      <span> {" "}{option.label} </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px] border-collapse text-left">

              <thead className="bg-[#f3f7f2]">
                <tr className="text-xs font-bold uppercase tracking-wide text-[#42654b]">
                  <th className="w-28 px-3 py-3">Pass Type</th>
                  <th className="w-32 px-3 py-3">Status</th>
                  <th className="w-28 px-3 py-3 text-center">Actions</th>
                  <th className="w-52 px-3 py-3">Product Details</th>
                  <th className="w-16 px-3 py-3">Qty</th>
                  <th className="w-36 px-3 py-3">Estimated Price</th>
                  <th className="w-44 px-3 py-3">Organization</th>
                  <th className="w-40 px-3 py-3">Person Name</th>
                  <th className="w-52 px-3 py-3">Contact</th>
                  <th className="w-40 px-3 py-3">Expected Return</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="group animate-[fadeIn_0.4s_ease-out_both] transition-all 
                    duration-200 hover:bg-[#f4f9f3] hover:shadow-[inset_3px_0_0_#56805d]">

                    {/* Pass Type Badge */}
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${product.status === "Approved"
                          ? "border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-100/70 text-emerald-700"
                          : "border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-100/70 text-amber-700"
                          }`}
                      >
                        <Package size={14} strokeWidth={2.5} />
                        {product.type}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs 
                          font-semibold transition-all duration-300 hover:-translate-y-0.5
                           hover:shadow-md ${product.status === "Approved"

                            ? "border-emerald-200  text-emerald-700"
                            : "border-amber-200 text-amber-700"
                          }`}
                      >
                        {product.status === "Approved" ? (
                          <CheckCircle2 size={20} strokeWidth={2.5} />
                        ) : (
                          <Clock3 size={20} strokeWidth={2.5} />
                        )}

                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex items-center justify-center gap-1 rounded-xl border
                       border-gray-100 bg-white p-1 shadow-sm transition-all duration-200 
                       group-hover:border-[#dce9dd]">

                        <button
                          title="View details"
                          onClick={() => setSelectedProduct(product)}
                          className="rounded-lg p-2 text-blue-600 transition-all 
                          duration-200 hover:scale-110 hover:bg-blue-50">
                          <Eye size={17} />
                        </button>

                        {/* eye tooltip */}
                        {/* Product Details Popover */}
                        {selectedProduct && (
                          <div
                            className="fixed inset-0 z-50 bg-black/10 flex items-center justify-center p-2"
                            onClick={() => setSelectedProduct(null)}
                          >
                            <div
                              className="w-full max-w-lg overflow-hidden rounded-2xl border relative
                            border-[#dce9dd] bg-white shadow-2xl animate-[fadeIn_0.2s_ease-out]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Header */}
                              {/* Product Summary */}
                              <div className="border-b border-gray-100 bg-[#f7faf6] p-3">
                                <div className="flex items-center justify-between gap-3">
                                  <div className="flex">
                                    <div>
                                      <h3 className="text-base font-bold text-gray-800">
                                        {selectedProduct.productName}
                                      </h3>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {selectedProduct.type} : Qty: {selectedProduct.quantity}
                                      </p>
                                    </div>

                                  </div>


                                  <span className="rounded-full bg-green-100 px-3 py-1.5 
                                 text-xs font-semibold text-green-700">
                                    {selectedProduct.status}
                                  </span>
                                </div>
                              </div>

                              {/* Details */}
                              <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">

                                {/* Product Price */}
                                <div className="rounded-xl border border-gray-100 p-2 transition
                               hover:border-green-200 hover:bg-green-50/40">
                                  <div className="mb-2 flex items-center gap-2 text-[#56805d]">
                                    <IndianRupee size={17} />
                                    <span className="text-xs font-semibold uppercase tracking-wide">
                                      Product Price
                                    </span>
                                  </div>
                                  <p className="text-lg font-semibold text-gray-800">
                                    ₹{Number(selectedProduct.price).toLocaleString("en-IN")}
                                  </p>
                                </div>

                                {/* Serial Number */}
                                <div className="rounded-xl border border-gray-100 p-2 transition
                                 hover:border-green-200 hover:bg-green-50/40">
                                  <div className="mb-2 flex items-center gap-2 text-[#56805d]">
                                    <Hash size={17} />
                                    <span className="text-xs font-semibold uppercase tracking-wide">
                                      Serial Number
                                    </span>
                                  </div>
                                  <p className="break-words text-sm font-semibold text-gray-800">
                                    {selectedProduct.serialNumber || "Not provided"}
                                  </p>
                                </div>

                                {/* Address */}
                                <div className="rounded-xl border border-gray-100 p-2 transition hover:border-green-200 hover:bg-green-50/40">
                                  <div className="mb-2 flex items-center gap-2 text-[#56805d]">
                                    <MapPin size={17} />
                                    <span className="text-xs font-semibold uppercase tracking-wide">
                                      Address
                                    </span>
                                  </div>
                                  <p className="break-words text-sm text-gray-700">
                                    {selectedProduct.address || "Not provided"}
                                  </p>
                                </div>

                                {/* Return Reason */}
                                <div className="rounded-xl border border-gray-100 p-2 transition hover:border-green-200 hover:bg-green-50/40">
                                  <div className="mb-2 flex items-center gap-2 text-[#56805d]">
                                    <RotateCcw size={17} />
                                    <span className="text-xs font-semibold uppercase tracking-wide">
                                      Return Reason
                                    </span>
                                  </div>
                                  <p className="break-words text-sm text-gray-700">
                                    {selectedProduct.returnReason || "Not applicable"}
                                  </p>
                                </div>

                                {/* Note */}
                                <div className="rounded-xl border border-gray-100 p-2 transition hover:border-green-200 hover:bg-green-50/40 sm:col-span-2">
                                  <div className="mb-2 flex items-center gap-2 text-[#56805d]">
                                    <FileText size={17} />
                                    <span className="text-xs font-semibold uppercase tracking-wide">
                                      Note
                                    </span>
                                  </div>
                                  <p className="break-words text-sm leading-6 text-gray-700">
                                    {selectedProduct.note || "No additional notes"}
                                  </p>
                                </div>

                              </div>

                              {/* Footer */}
                              <div className="flex justify-end border-t border-gray-100
                               bg-gray-50 px-3 py-3">
                                <button
                                  onClick={() => setSelectedProduct(null)}
                                  className="rounded bg-[#245b3e] px-3 py-2.5 text-sm 
                                  font-semibold text-white transition hover:bg-[#19452e]
                                   active:scale-95">
                                  Close Details
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          title="Edit"
                          className="rounded-lg p-2 text-[#245b3e] transition-all duration-200
                           hover:scale-110 hover:bg-green-50 active:scale-95">
                          <Pencil size={17} />
                        </button>

                        <button
                          title="Delete"
                          className="rounded-lg p-2 text-red-500 transition-all duration-200 
                          hover:scale-110 hover:bg-red-50 active:scale-95">
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>

                    <td className=" px-2 text-center">
                      <p className="font-semibold text-gray-800">
                        {product.productName}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        ID: GP-{String(product.id).padStart(4, "0")}
                      </p>
                    </td>

                    <td className=" px-4 text-sm text-gray-700">
                      {product.quantity}
                    </td>

                    <td className="px-4 text-sm font-semibold text-gray-800">
                      ₹{product.price.toLocaleString("en-IN")}
                    </td>

                    <td className="px-4 text-center text-sm font-medium text-gray-700">
                      {product.organization}
                    </td>

                    <td className="px-4 text-sm text-gray-700">
                      {product.fullName}
                    </td>

                    <td className="px-3">
                      <p className="text-sm text-gray-700">
                        {product.email}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {product.phone}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600/80 italic">
                      {product.expectedReturnDate || "Not applicable"}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>


          {/* Footer */}
          <div className="flex flex-col justify-between gap-2 border-t border-gray-100
           px-5 py-4 text-sm text-gray-500 sm:flex-row sm:items-center">
            <p>Showing {products.length} gate pass records</p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Report;