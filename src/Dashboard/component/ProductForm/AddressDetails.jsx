import { MapPin, NotebookDot } from 'lucide-react'
import React, { useState } from 'react'

const AddressDetails = () => {

    const [note, setNote] = useState("");

    const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";
   
        return (
        <>
            {/* Address and notes details */}
            <section className="mt-3">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-1">

                    {/* Notes */}
                    <div>
                        <label className={labelClass}>
                            Notes
                        </label>

                        <textarea
                            name="note"
                            rows="5"
                            maxLength="500"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Add additional instructions (optional)..."
                            className="inputClass resize-y"
                        />

                        <div className="mt-2 flex justify-end text-xs text-gray-400">
                            {note.length}/500 characters
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddressDetails