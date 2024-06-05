
export default function CustomImage({ src, alt, ...props }) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...props}
        />
    );
}