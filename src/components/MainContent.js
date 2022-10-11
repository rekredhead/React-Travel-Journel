import Card from "./Card";
import travelLogs from "./travel-logs";

export default function MainContent() {
    const contentArray = travelLogs.map(item => {
        return <Card
                    key={item.id}
                    {...item}
                />
    });
    return (
        <div className="mainContent">
            {contentArray}
        </div>
    );
}