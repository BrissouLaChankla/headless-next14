import { readdir } from 'fs/promises';
import { join } from 'path';


export default async function Logos() {

    const directoryPath = join(process.cwd(), '/public/icons');
    const files = await readdir(directoryPath);

    return (
        <div className="my-20">
            <ul>
                {files.map(file => (
                    <li key={file}>{file}</li>
                ))}
            </ul>
        </div>
    )
}
