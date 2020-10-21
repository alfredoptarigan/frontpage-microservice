import React from "react";
import Head from "next/head";
import Link from "next/link";
import Youtube from "react-youtube";
import courses from "src/constants/api/courses";

function DetailsCourse({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Microservice Learning</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapter?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <Youtube
              videoId={data?.chapter?.[0]?.lessons?.[0]?.video}
              id={data?.chapter?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></Youtube>
          </div>
        )}
      </section>
    </>
  );
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);
    return { data };
  } catch (error) {}
};
export default DetailsCourse;
