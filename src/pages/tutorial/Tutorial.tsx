import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { SubtitleData, TextData, Header } from "./Tutorial.d";

import "./tutorial.scss";

export default function Tutorial() {
  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const [postHeader, setPostHeader] = useState<Array<Header> | undefined>(
    undefined
  );
  const [data, setData] = useState<Array<SubtitleData | TextData> | undefined>(
    undefined
  );

  useEffect(() => {
    fetch("http://patryk.tofil.eu/backend/api/get_post_by_id/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPostHeader(res);
      })
      .catch((err) => {
        console.error(err);
        setPostHeader(undefined);
      });

    fetch("http://patryk.tofil.eu/backend/api/get_content_by_post_id/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error(err);
        setData(undefined);
      });
  }, [id]);

  if (data !== undefined) {
    if ((data[0] as TextData).text_data !== undefined) {
      console.log("instance");
    }
    if ((data[1] as TextData).text_data !== undefined) {
      console.log("instance2");
    }
  }

  return (
    <div className="tutorial">
      <h1>{postHeader ? postHeader[0].post_full_name : null}</h1>
      {data
        ? data.map((e, key) => {
            return (
              <div className="content">
                <MatchData key={key} data={e} />
              </div>
            );
          })
        : null}
    </div>
  );
}

function MatchData(props: { data: SubtitleData | TextData }) {
  let data = props.data;
  if ((data as SubtitleData).subtitle_data !== undefined) {
    return <h2>{(data as SubtitleData).subtitle_data}</h2>;
  } else if ((data as TextData).text_data !== undefined) {
    return <p>{(data as TextData).text_data}</p>;
  } else {
    return <></>;
  }
}
