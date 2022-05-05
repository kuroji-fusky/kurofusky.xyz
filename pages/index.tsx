import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Layout.module.scss";
import { ContainerBaseSEO } from "../components/Container";
import { CardSkeleBoi, YouToobCard } from "../components/Cards"

const ProjectCard = dynamic(() => import("../components/Cards"), {
  loading: () => <CardSkeleBoi />,
  ssr: false,
});

export default function Home() {
  const skills = [
    "Full-stack web development",
    "Web and UI/UX Design",
    "Indie music artist",
    "Filmmaker",
    "Novice VFX artist",
    "Performer",
  ];

  return (
    <ContainerBaseSEO>
      <div className={`${styles.section} ${styles["hero-bio"]}`}>
        <article id={styles["hero-bio-info"]}>
          <h1>
            Hi, I'm <span id="highlight">skepfusky!</span>
          </h1>
          <p>
            ...or just simply <span id="highlight">Skep</span>, or also known by
            my stage name <span id="highlight">Kokoro Husky</span> on streaming
            platforms -- I'm a 20-year-old self-employed and self-taught
            hobbyist from the Philippines!
          </p>
          <p>
            I'm not trying to be a celebrity, or even a{" "}
            <b>
              <i>popufur...</i>
            </b>{" "}
            I'm just trying to get my name out there as I'm extremely passionate
            about sharing and possibly inspiring future generations through my
            broad set of skills, talent, and art as a self-taught individual.
          </p>
          <div id={styles["skill-inline"]}>
            {skills.map((skill, i) => (
              <div id={styles["skill-item"]} key={i}>
                {skill}
              </div>
            ))}
          </div>
        </article>
        <div id={styles["hero-bio-svg"]}>
          {/* todo: cringe svg here */}
          <img
            src="/static/avatars/07.png"
            alt="Your mom"
            className="rounded-full w-[200px]"
          />
        </div>
      </div>
      <hr />
      <div className={styles.section}>
        <div className={styles["section-header"]}>
          <h3 style={{ "--emoji-key": '"📺"' } as React.CSSProperties}>
            Channels
          </h3>
        </div>
        <div
          className="grid gap-8 mx-auto w-[90%] text-center md:grid-flow-row"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <YouToobCard
            image="/static/avatars/08.png"
            title="skepfusky"
            description="The main source for abominations"
          />
          <YouToobCard
            image="/static/avatars/08.png"
            title="codefusky"
            description="lol"
          />
        </div>
      </div>
      <hr />
      <div className={styles.section}>
        <div className={styles["section-header"]}>
          <h3 style={{ "--emoji-key": '"✨"' } as React.CSSProperties}>
            Featured Developer Projects
          </h3>
        </div>
        <div id={styles["project-grid"]}>
          <ProjectCard
            image="/static/projects/paco-yt-icon.jpg"
            title="Paco Drawing Stats"
            description="A repository that collects a bunch drawing data from Paco Panda, written in Python and Next.js"
            pageLink="/portfolio/paco-drawing-stats"
            repoLink="skepfusky/pandapaco-drawing-stats"
          />
          <ProjectCard
            image="/static/avatars/08.png"
            title="This awful website"
            description="This terrible website you're currently browsing written in Next.js"
            repoLink="skepfusky/skepfusky-website"
          />
          <ProjectCard
            image="/static/projects/majira-vscode.png"
            title="Majira Strawberry VS Code Theme"
            description="A VS Code theme based of Majira's fursona"
            repoLink="skepfusky/majira-strawberry-vscode"
          />
          <ProjectCard
            image="/static/projects/myfursona.png"
            title="MyFursona"
            description="An open source project where you an manage your fursona(s)"
            repoLink="MyFursona-Project/MyFursona"
            extLink="https://www.myfursona.art"
          />
        </div>
      </div>
      <hr />
      <div className={styles.section}>
        <div className={styles.seperator}>
          <div className={styles["section-header"]}>
            <h3 style={{ "--emoji-key": "'🌐'" } as React.CSSProperties}>
              Websites I made
            </h3>
          </div>
        </div>
        <div className={styles.seperator}>
          <div className={styles["section-header"]}>
            <h3 style={{ "--emoji-key": "'💜'" } as React.CSSProperties}>
              Contributed Projects
            </h3>
          </div>
        </div>
      </div>
      {/* <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>🌐 WEBSITES I MADE</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/static/projects/myfursona.png"
              title="Plainrock124 Website"
              description="My reindition of what his website will look like"
              repoLink="skepfusky/plainrock124-website"
            />
          </div>
        </div>
        <hr /> */}
      {/* <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>💜 PROJECTS I'VE CONTRIBUTED</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/static/projects/myfursona.png"
              title="MyFursona"
              description="An open source project where you an manage your fursona(s)"
              repoLink="MyFursona-Project/MyFursona"
              extLink="https://www.myfursona.art"
            />
            <ProjectCard
              image="/static/projects/myfursona.png"
              title="Fursuit Detector"
              description="This is pretty much self-explanatory"
              repoLink="OpenFurs/fursuit-detector-web"
            />
          </div>
        </div>
        <hr /> */}
      {/* <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>🎵 DISCOGRAPHY</h3>
            <Link href="/projects">See moar</Link>
          </div>
        </div>
        <hr /> */}
      {/* <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>📝 PROFICENCY</h3>
          </div>
        </div> */}
    </ContainerBaseSEO>
  );
}
