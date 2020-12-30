import { ReactElement, useState } from "react";
import Tabs, { Tab } from "../../../../Ui/tabs/Tabs";
import BotCommands from "./Pages/BotCommands";
import Overlays from "./Pages/Overlays";
import Rounds from "./Pages/Rounds";
import Seasons from "./Pages/Seasons";
import Toplist from "./Pages/Toplist";

const tabs: Tab[] = [
    {
        name: 'Seasons',
        value: 'seasons',
        view: Seasons,
    },
    {
        name: 'Rounds',
        value: 'rounds',
        view: Rounds,
    },
    {
        name: 'Toplist',
        value: 'toplist',
        view: Toplist,
    },
    {
        name: 'Bot Commands',
        value: 'botCommands',
        view: BotCommands,
    },
    {
        name: 'Overlays',
        value: 'overlays',
        view: Overlays,
    },
];

export default function VoteSystem(): ReactElement {
    const [active, setActive] = useState('seasons');
    return <div className={'voting'}>
        <Tabs active={active} setActive={setActive} tabs={tabs} />
    </div>;
}