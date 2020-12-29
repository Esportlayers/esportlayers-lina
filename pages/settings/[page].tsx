import { ReactElement } from "react";
import PageFrame from "../../components/PageFrame";
import { useRouter } from 'next/router';
import SettingsNavigation from "../../components/Pages/Settings/Navigation";

export default function Settings(): ReactElement {
    const router = useRouter();
    const { page } = router.query;

    return <PageFrame>
        <div className={'pageContent'}>
            <div className={'navigation'}>
                <SettingsNavigation active={page as string} />
            </div>
        </div>

        <style jsx>{`
            .pageContent {
                height: 100vh;
                display: flex;
                align-items: stretch;
            }    
        `}</style>
    </PageFrame>;
}