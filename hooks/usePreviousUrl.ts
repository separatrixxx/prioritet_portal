import { useEffect, useState } from 'react';
import { useSetup } from './useSetup';


export const usePreviousUrl = () => {
    const [previousUrl, setPreviousUrl] = useState<string>(
        typeof window !== 'undefined' ? sessionStorage.getItem('previousUrl') || '/' : '/'
    );
    const { router } = useSetup();

    useEffect(() => {
        const handleRouteChange = () => {
            setPreviousUrl(router.asPath);
            sessionStorage.setItem('previousUrl', router.asPath);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    return previousUrl;
};
