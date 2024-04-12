import Image from "next/image"
import Link from "next/link"
export default async function Article(props) {

    const response = await fetch(`${process.env.SCRAP_WP}/wp-json/wp/v2/media/${props.featured_media}`)
    const image = await response.json();
    return (
        <article className={`relative overflow-hidden rounded-lg shadow transition hover:shadow-lg ${props.classes}`}>
            <Image
                fill
                alt={`Image de ${props.title.rendered}`}
                src={image.source_url}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative bg-gradient-to-t from-gray-900/90 to-gray-900/30 h-full pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                    <time dateTime={props.date} className="block text-xs text-white/90">{props.date}</time>

                    <Link href={`/article/${props.slug}`} >
                        <h3 className="mt-0.5 text-lg text-white">{props.title.rendered}</h3>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            {props.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p>
                    </Link>
                </div>
            </div>
        </article>
    )
}
