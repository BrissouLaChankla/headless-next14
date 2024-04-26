import styles from '@/styles/Article.module.scss'

export default async function page({ params }) {

    const response = await fetch(`${process.env.SCRAP_WP}/wp-json/wp/v2/posts?slug=${params.slug}&_fields=id,title,content,date,author,featured_media`)
    const data = await response.json();
    const article = data[0];

    const responseImg = await fetch(`${process.env.SCRAP_WP}/wp-json/wp/v2/media/${article.featured_media}`)
    const image = await responseImg.json();


    return (
        <div>
            <div className="w-screen absolute left-0 pt-44 pb-32 top-0 text-center text-white" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${image.source_url})`}}>
                <h1 className="text-5xl">{article.title.rendered}</h1>
            </div>

            <div className="mt-72">

                <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} className={styles.article} />
            </div>
        </div>
    )
}
