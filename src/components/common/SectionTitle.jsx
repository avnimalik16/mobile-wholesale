function SectionTitle({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
