import Image from "next/image";

interface PgGalleryProps {
  image: string;
  name: string;
}

export default function PgGallery({ image, name }: PgGalleryProps) {
  return (
    <div className="relative aspect-16/9 w-full overflow-hidden rounded-card border border-border bg-card sm:aspect-21/9">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1152px"
        className="object-cover"
      />
    </div>
  );
}
