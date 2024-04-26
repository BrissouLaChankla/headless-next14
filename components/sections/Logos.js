import { readdir } from 'fs/promises';
import { join } from 'path';


export default async function Logos() {

    const directoryPath = join(process.cwd(), '/public/icons');
    const files = await readdir(directoryPath);

    return (
        <div className="my-20 flex gap-4 justify-evenly brightness-0 flex-wrap">
                {files.map(file => (
                    <img key={file} src={`/icons/${file}`} className='w-1/8 sm:w-10' width={50} height={50} />
                ))}
        </div>
    )
}
