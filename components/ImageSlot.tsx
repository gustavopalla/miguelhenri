type Props = {
  src: string;
  alt: string;
  credit?: string;
  creditHref?: string;
  className?: string;
};

const UTM = "utm_source=miguel_henri&utm_medium=referral";

export default function ImageSlot({ src, alt, credit, creditHref, className = "" }: Props) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-full w-full object-cover" />
      {credit && (
        <span className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-12px)] overflow-hidden text-ellipsis whitespace-nowrap rounded-[5px] bg-black/55 px-[7px] py-[3px] font-[system-ui,-apple-system,sans-serif] text-[10px] leading-[1.2] text-white backdrop-blur-[6px]">
          Photo by{" "}
          <a className="!text-inherit hover:underline" href={`${creditHref}?${UTM}`} target="_blank" rel="noopener noreferrer">
            {credit}
          </a>{" "}
          on{" "}
          <a className="!text-inherit hover:underline" href={`https://unsplash.com/?${UTM}`} target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
        </span>
      )}
    </div>
  );
}
