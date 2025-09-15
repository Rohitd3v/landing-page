export function Heading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`w-full flex flex-col ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {subtitle && (
        <p className="font-semibold mb-2 text-red-500 uppercase tracking-wide text-sm sm:text-base">
          {subtitle}
        </p>
      )}
      <h1 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
        {title}
      </h1>
    </div>
  );
}
