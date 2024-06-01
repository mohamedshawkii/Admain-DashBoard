import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { PieChartData as data } from "../data/ChartsData";

function ResPieChart({ inDashBoard }) {
  return (
    <ResponsivePie
      data={data}
      colors={[
        "#ac09e7",
        "#CB3CFF",
        "#0E43FB",
        "#3100e0",
        "#098bd0",
        "#57C3FF",
      ]}
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
      legends={
        !inDashBoard
          ? [
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#AEB9E1",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#CB3CFF",
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
}

export default ResPieChart;
