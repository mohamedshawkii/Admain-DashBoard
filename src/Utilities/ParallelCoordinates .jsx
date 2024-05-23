import React from "react";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import { DataParallelCoordinates as data } from "../data/ChartsData";

function ParallelCoordinates() {
  return (
    <ResponsiveParallelCoordinates
      data={data}
      colors={["#ac09e7","#CB3CFF","#0E43FB", "#3100e0","#098bd0", "#57C3FF"]}
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
          "legend": {
            "text": {
                "fontSize": 18,
                "fill": "#57C3FF",
                "outlineWidth": 2,
                "outlineColor": "#0B1739"
            }
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
        
      }}
      variables={[
        {
          id: "temp",
          label: "temperature",
          value: "temp",
          min: "auto",
          max: "auto",
          ticksPosition: "before",
          legendPosition: "start",
          legendOffset: 20,
        },
        {
          id: "cost",
          value: "cost",
          min: 0,
          max: "auto",
          ticksPosition: "before",
          legendPosition: "start",
          legendOffset: 20,
        },
        {
          id: "weight",
          value: "weight",
          min: "auto",
          max: "auto",
          legendPosition: "start",
          legendOffset: -20,
        },
        {
          id: "volume",
          value: "volume",
          min: 0,
          max: "auto",
          legendPosition: "start",
          legendOffset: -20,
        },
      ]}
      margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
      lineWidth={3}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 60,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default ParallelCoordinates;
