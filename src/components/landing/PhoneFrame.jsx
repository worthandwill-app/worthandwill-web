// Marco de teléfono. La imagen lleva w-full/h-auto y ninguna restricción de
// altura, así que la proporción original (828:1792) se conserva sola.
// Radios concéntricos: 36px exterior − 8px de bisel = 28px interior.
export default function PhoneFrame({ src, alt, width, height, priority = false, className = "" }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[240px] rounded-phone bg-navy p-2 shadow-phone sm:max-w-[264px] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-navy-deep">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
