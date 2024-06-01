import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { DataMapChart as data} from "../data/ChartsData";
import { FeatureMapChart as GeoFeatures} from "../data/ChartsData";

function WorldMapChart({inDashBoard}) {
  return (
    <ResponsiveChoropleth
    data={data}
    features={GeoFeatures.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors={["#ac09e7","#CB3CFF","#0E43FB", "#3100e0","#098bd0", "#57C3FF"]}
    domain={[ 0, 1000000 ]}
    unknownColor="#0b1739"
    label="properties.name"
    valueFormat=".2s"
    projectionScale={299}
    projectionTranslation={[ 0.3, 1 ]}
    projectionRotation={[ 0, 0, 0 ]}
    graticuleLineWidth={0}
    graticuleLineColor="#dddddd"
    borderWidth={1}
    borderColor="#0b1739"
    isInteractive={true}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        },
        {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
                {
                    offset: 0,
                    color: '#000'
                },
                {
                    offset: 100,
                    color: 'inherit'
                }
            ]
        }
    ]}
    legends={!inDashBoard? [
        {
            anchor: 'left',
            direction: 'column',
            justify: false,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#AEB9E1',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#CB3CFF',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]: undefined}
/>
  );
}
export default WorldMapChart