const ActivityItem = ({
  name,
  period,
  description,
  webUrl,
}: {
  name: string;
  period: string[];
  description: string;
  webUrl?: string; // 웹사이트 링크 추가
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
        {webUrl && (
          <p>
            웹사이트 링크:{" "}
            <a href={webUrl} target="_blank">
              {webUrl}(클릭)
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
