import { useVoteValue } from "@esportlayers/io";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactElement } from "react";
import Status from "./VoteOverlay/Status";

const variants: Variants = {
    hidden: {x: '100%', transition: {duration: .24}},
    visible: {x: 0, transition: {duration: .24}},
}

export default function VoteOverlay(): ReactElement {
    const [voteState] = useVoteValue();
    return <AnimatePresence>
        {voteState && <motion.div initial={'hidden'} animate={'visible'} exit={'hidden'} variants={variants} className={'voteSideBar'}>
            <div className={'voteOverlay'}>
                <h2>Voting</h2>
                <Status />
            </div>

            <style jsx global>{`
                .voteSideBar {
                    position: fixed;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background-color: var(--anthrazit);
                    box-shadow: -2px 0 10px rgba(0,0,0,.2);
                    padding: .75rem 1rem;
                }    

                h2 {
                    font-size: 1.25rem;
                    text-transform: uppercase;
                    color: var(--secondary-accent);
                }
            `}</style>
            <style jsx>{`
            `}</style>
        </motion.div>}
    </AnimatePresence>;
}