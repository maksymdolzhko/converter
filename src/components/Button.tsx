const Button = ({label, className}:{label: string, className: string}) => {
    return (
        <button
        type="button"
        className={`${className} rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {label}
      </button>
    )
}

export default Button;