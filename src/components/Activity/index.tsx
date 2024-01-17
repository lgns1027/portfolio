import SectionTitle from "../SectionTitle";
import ActivityItem from "./ActivityItem";

import { DataProps } from "@/types";

const Activity = ({ activity }: Pick<DataProps, "activity">) => {
  return (
    <div>
      <SectionTitle>Activities</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...activity].reverse().map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
      <p>
        웹사이트 링크: <a href="https://lgns1027.github.io/KTX-GWANGMYEONG/" target="_blank" rel="noopener noreferrer">광명역 소개</a>
      </p>
      <p>
        웹사이트 링크: <a href="https://jhj041027.wixsite.com/my-site-1" target="_blank" rel="noopener noreferrer">광명의 쇼핑몰</a>
      </p>
      
    </div>
    
  );
};

export default Activity;
