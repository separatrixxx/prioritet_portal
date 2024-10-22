import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../Htag/Htag';
import { ToastSuccess } from '../Toast/Toast';
import styles from './AttachFile.module.css';


export const AttachFile = (): JSX.Element => {
    const { router } = useSetup();

    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            
            setFileName(file.name);
            ToastSuccess(`Файл ${file.name} успешно загружен`);
        }
    };

    return (
        <div className={styles.attachFileContainer}>
            <label htmlFor="file-upload" className={styles.customAttachFile}>
                <Htag tag='s'>
                    {fileName || setLocale(router.locale).select_file}
                </Htag>
            </label>
            <input
                id="file-upload"
                className={styles.attachFile}
                type="file"
                onChange={handleFileUpload}
                aria-label="file upload input"
            />
        </div>
    );
};
