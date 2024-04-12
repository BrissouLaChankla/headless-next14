import Article from "../Article";
import Titlesub from "../Titlesub";


export default async function Articles() {
    const response = await fetch(`${process.env.SCRAP_WP}/wp-json/wp/v2/posts?per_page=6&_fields=id,slug,title,featured_media,date,excerpt`);
    const articlesData = await response.json();


    
    return (
        <div className="mt-36">
        <Titlesub title="Nos derniers Articles" sub="On adore le café et on adore vous en parler" classes="text-center" />
        <div className="grid grid-cols-12 gap-8 mt-16 ">
            {articlesData.map((el, i) => <Article {...el} classes="col-span-4" key={i} />)}
        </div>
        </div>
    )
}
