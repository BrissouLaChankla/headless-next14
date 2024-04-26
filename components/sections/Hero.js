import Image from "next/image"

export default function Hero() {
    return (
        <div className="md:mt-24 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-5 relative md:order-1  min-h-64">
                <img src="/hero/illu.webp" fill className="object-contain" alt="Illustration hero banner" />
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                <h1>Vous voulez tout savoir sur le café ?</h1>
                <p className="max-w-xl">Découvrez les secrets du café, de ses origines exotiques à ses multiples bienfaits pour la santé. Apprenez comment cette boisson populaire peut améliorer votre journée, stimuler votre métabolisme et élever votre humeur.</p>
                <div className="flex gap-2">
                    <a href="#advantages" className="btn btn-neutral btn-sm h-10">Bienfaits du café</a>
                    <a href="#articles" className="btn btn-outline btn-sm h-10">Nos derniers articles</a>
                </div>
            </div>

        </div>
    )
}
