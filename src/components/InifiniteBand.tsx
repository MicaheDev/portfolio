type InifiteBandProps = {
  listOfParagraphs: string[];
  containerClass?: string;
};

export default function InifiniteBand({
  listOfParagraphs,
  containerClass,
}: InifiteBandProps) {
  return (
    <div
      className={`bg-black marquee font-m42 uppercase ${containerClass}`}
    >
      <ul>
        {listOfParagraphs.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <ul aria-hidden>
        {listOfParagraphs.map((p) => (
          <li key={p + "hidden"}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
