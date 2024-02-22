'use client';
const Input = ({customClass = ''}:{customClass: string}) => {
    return(
        <input
            type="text"
            placeholder="0"
            className={`${customClass} min-h-[60px] min-w-0 rounded-[4px] text-center border border-[#C1C2CA] px-4 py-2 text-[20px] font-semibold leading-[28px] text-gray-900`}
        />
    )
}

export default Input