import React from "react";
import { CalenderData as data } from "../data/ChartsData";
import { ResponsiveCalendar } from "@nivo/calendar";

function ResCalender() {
  return (
    <ResponsiveCalendar
      data={data}
      theme={{
        text: {
          fill: "#AEB9E1",
        },
        axis: {
          domain: {
            line: {
              stroke: "#AEB9E1",
            },
          },
          legend: {
            text: {
              fontSize: 18,
              fill: "#57C3FF",
              outlineWidth: 2,
              outlineColor: "#0B1739",
            },
          },
          ticks: {
            line: {
              stroke: "#CB3CFF",
              strokeWidth: 2,
            },
            text: {
              fontSize: 14,
              fill: "#AEB9E1",
              outlineWidth: 1,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: "#8951FF",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
      }}
      from="2015-03-01"
      to="2016-07-12"
      emptyColor="#0B1739"
      colors={["#ac09e7","#CB3CFF","#0E43FB", "#3100e0","#098bd0", "#57C3FF"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#77d0ff"
      monthBorderWidth={1}
      dayBorderWidth={1}
      dayBorderColor="#AEB9E1"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
}

export default ResCalender;
