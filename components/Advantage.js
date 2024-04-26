import Image from "next/image"

export default function Advantage({ title, icon, content, classes }) {
  return (
    <div className={`${classes} flex flex-col md:flex-row items-start  gap-4`}>
      <div>
        <div className="bg-black p-2 rounded-full">
          <img src={`/icons/${icon}.svg`} className="invert min-w-4" width={20} height={20} alt={`Icon ${icon}`} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}
