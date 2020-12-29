import React, { ReactElement } from 'react';
import PageFrame from '../components/PageFrame';
import dynamic from "next/dynamic";
import { useCurrentUser } from '../modules/selector/UiSelector';
import {getWSUrl, Wisp} from '@esportlayers/io';
import PageView from '../components/Pages/Dashboard/PageView';
import VoteOverlay from '../components/VoteOverlay';

const Tether = dynamic(
    () => (import('@esportlayers/io')),
    { ssr: false }
);

export default function Dashboard(): ReactElement {
    const currentUser = useCurrentUser();
    return <PageFrame>
        {currentUser && <Tether url={getWSUrl(process.env.API_URL + '/dota-gsi/live/' + currentUser.frameApiKey)}>
            <PageView />
        </Tether>}

        {currentUser && <Wisp url={getWSUrl(process.env.API_URL + '/bets/live/' + currentUser.frameApiKey)}>
            <VoteOverlay />
        </Wisp>}
    </PageFrame>;
}
