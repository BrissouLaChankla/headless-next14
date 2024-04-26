import Advantage from "../Advantage";
import Titlesub from "../Titlesub";

const advantagesData = require('@/data/advantages.json');

export default function Advantages() {

  return (
    <>
      <Titlesub title="Les Bienfaits du Café" sub="Explorez les avantages énergisants et santé du café." />
      <div className="grid grid-cols-12 gap-x-4 gap-y-10 my-10">
        {
          advantagesData.map((el, i) => <Advantage {...el} classes="col-span-12 sm:col-span-6 md:col-span-4" key={i} />)
        }
      </div>
    </>
  )
}
