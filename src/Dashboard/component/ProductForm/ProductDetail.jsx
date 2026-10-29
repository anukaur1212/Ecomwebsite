import { Package, RotateCw, Truck, Upload } from 'lucide-react'
import React, { useState } from 'react'

const ProductDetail = () => {

    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState("RGP");

    const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";


    return (
        <>

            {/* Product details */}

            <section>
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center
                             rounded-xl bg-[#eaf2eb] text-[#245b3e]">
                        <Package size={20} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-800">
                            Product Information
                        </h2>
                        <p className="text-xs text-gray-500">
                            Enter the details of the product.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    {/* Product Name */}
                    <div>
                        <label className={labelClass}>
                            Product Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="productName"
                            placeholder="Enter product name"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Product Serial */}
                    <div>
                        <label className={labelClass}>
                            Product Serial No.
                        </label>

                        <input
                            type="text"
                            name="serialNumber"
                            placeholder="Enter product serial number"
                            required
                            className="inputClass"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-2">
                    {/* Quantity */}
                    <div>
                        <label className={labelClass}>
                            Product Quantity <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            defaultValue="1"
                            placeholder="Enter quantity"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Estimated Price */}
                    <div>
                        <label className={labelClass}>
                            Estimated Product Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            min="0"
                            step="0.01"
                            placeholder="Enter estimated price"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Expected Return Date: RGP Only */}
                    {type === "RGP" && (
                        <div className="">
                            <label className={labelClass}>
                                Expected Return Date{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="date"
                                name="expectedReturnDate"
                                required
                                className="inputClass"
                            />
                        </div>
                    )}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 mt-3 items-center">
                    {/* Product Photo */}
                    <div className=" flex h-35 w-80 flex-col mb-5">
                        <label className={labelClass}>
                            {/* <Upload className={iconClass} /> */}
                            Upload Product Photo
                        </label>

                        <label className="group mt-2 flex min-h-[100px] cursor-pointer items-center justify-center rounded-xl border-2
                                 border-dashed border-gray-300 bg-gray-50/70 px-4 py-5 text-center transition-all hover:border-[#56805d] hover:bg-[#f1f7f1]">

                            <div className="flex justify-center gap-2">
                                <Upload size={20} />
                                <span className="text-sm font-semibold text-gray-700">
                                    {photo ? photo.name : "Click to upload photo"}
                                </span>

                                <span className="mt-1 text-xs text-gray-400">
                                    PNG, JPG or JPEG
                                </span>
                            </div>

                            <input
                                type="file"
                                name="productPhoto"
                                accept="image/png,image/jpeg,image/jpg"
                                className="hidden"
                                onChange={(e) =>
                                    setPhoto(e.target.files?.[0] || null)
                                }
                            />
                        </label>
                    </div>

                    {/* gate pass type */}
                        {/* RGP */}
                        <label className="flex flex-1 h-27 cursor-pointer items-center justify-center gap-4 
                        border border-gray-800 px-3 py-3 rounded mr-3">
                            <input
                                type="radio"
                                name="type"
                                value="RGP"
                                checked={type === "RGP"}
                                onChange={(e) => setType(e.target.value)}
                                className="h-5 w-5 shrink-0 cursor-pointer accent-[#245b3e]"
                            />
                            <span className="text-base font-medium text-gray-800"> RGP
                            </span>
                            <p className=" text-xs leading-5 text-gray-500">
                                Returnable Gate Pass. The product will return to the
                                organization.
                            </p>
                        </label>

                        {/* NRGP */}
                        <label className="flex flex-1 h-27 cursor-pointer items-center justify-center gap-4
                        border border-gray-800 px-3 rounded py-3">
                            <input
                                type="radio"
                                name="type"
                                value="NRGP"
                                checked={type === "NRGP"}
                                onChange={(e) => setType(e.target.value)}
                                className="h-5 w-5 shrink-0 cursor-pointer accent-[#245b3e]"
                            />
                            <span className="text-base font-medium text-gray-800"> NRGP
                            </span>
                            <p className=" text-xs leading-5 text-gray-500">
                                Returnable Gate Pass. The product will return to the
                                organization.
                            </p>
                        </label>
                </div>

            </section>

        </>
    )
}

export default ProductDetail