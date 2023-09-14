export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-orange-200 ` + className}>
            {value ? value : children}
        </label>
    );
}
