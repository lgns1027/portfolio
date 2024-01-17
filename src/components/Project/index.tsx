import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  return (
    <>
      <div>
        <SectionTitle>Team Project</SectionTitle>
        <div className="flex flex-col gap-24">
          {[...project]
            .reverse()
            .filter((project) => project.isTeam)
            .map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
        </div>
      </div>
      <div>
        <SectionTitle>Personal Project</SectionTitle>
        <div className="flex flex-col gap-24">
          {[...project]
            .reverse()
            .filter((project) => !project.isTeam)
            .map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
      <p>
        웹사이트 링크: <a href="https://lgns1027.github.io/KTX-GWANGMYEONG/" target="_blank" rel="noopener noreferrer">광명역 소개</a>
      </p>
        </div>
      </div>
    </>
  );
};

export default Project;
