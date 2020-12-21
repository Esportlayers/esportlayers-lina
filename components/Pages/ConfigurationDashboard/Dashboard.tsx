import React, { ReactElement } from "react";
import NudgeFromBottom from "../../Ui/motion/NudgeFromBottom";
import AntiSnipeMap from "./TileSvgs/AntiSnipeMap";
import RoshanTimer from "./TileSvgs/RoshanTimer";
import VoteSystem from "./TileSvgs/VoteSystem";
import WLSystem from "./TileSvgs/WLSystem";
import DraftStats from "./TileSvgs/DraftStats";
import LiveStats from "./TileSvgs/LiveStats";
import { motion } from "framer-motion";

const options = [
    {
        icon: <VoteSystem />,
        title: 'Vote system',
        description: 'Viewers can vote on your game result',
    }, {
        icon: <WLSystem />,
        title: 'W/L Overlay',
        description: 'Counts your wins and losses',
    }, {
        icon: <AntiSnipeMap />,
        title: 'Anti snipe minimap',
        description: 'Overlay for your minimap to avoid snipers',
    }, {
        icon: <RoshanTimer />,
        title: 'Roshan timer',
        description: 'Simple timer to show when roshan does respawn',
    }, {
        icon: <DraftStats />,
        title: 'Draft stats',
        description: 'Statistics for hero picks',
    }, {
        icon: <LiveStats />,
        title: 'Hero stats',
        description: 'Live statistics by heroes in your games',
    }
]
export default function Dashboard(): ReactElement {
    return <div className={'container'}>
        <div className={'grid'}>
            {options.map(({title, icon, description}, idx) => <NudgeFromBottom delay={.05 * idx} key={title}>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: .95}}>
                    <div className={'tile'}>
                        <div className={'icon'}>{icon}</div>
                        <h4>{title}</h4>
                        <div className={'info'}>{description}</div>
                    </div>
                </motion.div>
            </NudgeFromBottom>)}
        </div>

        <style jsx>{`
            .container {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                min-height: 100vh;
                align-items: center;
            } 

            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 4rem;
                padding: 2rem 3rem;
            }   

            .icon {
                margin-bottom: 2rem;
                text-align: center;
            }

            h4 {
                margin: 0;
                text-align: center;
            }

            .info {
                font-size: .9rem;
                color: rgba(255, 255, 255, .85);
                text-align: center;
            }

            .tile {
                cursor: pointer;
            }
        `}</style>
    </div>;
}