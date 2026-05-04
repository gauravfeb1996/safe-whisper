import { MainCard } from "../card/card-component";
import FeedCardActioPanel from "./feedCardActionPanel";
import FeedCardContent from "./feedCardContent";
import FeedCardUserDetails from "./feedCardUserDetails";

export default function FeedContentCard() {
    return (
        <MainCard
            title={
                <FeedCardUserDetails
                    userAlias="test-kumar"
                    timeOfPost="20 hours ago"
                />
            }
            content = {
                <FeedCardContent />
            }
            footer={
                <FeedCardActioPanel />
            }
            classes={{
                card: 'max-w-2xl'
            }}
        />
    );
}