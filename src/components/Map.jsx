import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbers" style={{ width: "90%", height: "110%" }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="url(#gradient)"
              stroke="green"
              strokeWidth={1}
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={8} fill="#F53" stroke="white" />
        <line
          x1={-74.006}
          y1={40.7128}
          x2={-75.1662}
          y2={39.9526}
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <text x={-75.1662} y={39.9526} textAnchor="start" alignmentBaseline="middle" fill="white">
          {"New Jersey"}
        </text>
      </Marker>
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
      </defs>
    </ComposableMap>
  );
};

export default MapChart;
