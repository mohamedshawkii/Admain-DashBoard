import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { PieChartData as data } from "../data/ChartsData";

function ResPieChart() {
  return (
    <ResponsivePie
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
            fill: "#AEB9E1",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-180}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0"]],
      }}
      arcLinkLabelsTextColor="#AEB9E1"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}

export default ResPieChart;
