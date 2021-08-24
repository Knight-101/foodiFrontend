import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./MainContent.css";
import axios from "axios";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RestaurantCard from "./RestaurantCard";
import { BASE_URL } from "../../variables";

export default function MainContent() {
  const [items, setItems] = useState([]);
  const baseurl = BASE_URL;
  useEffect(() => {
    axios.get(baseurl + "/restaurant/list").then((res) => {
      setItems(res.data);
    });
  }, [baseurl]);
  return (
    <div className="mainContent">
      <div className="mainContent-l">
        <div id="filters">
          <h4 style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
            <b>Filters</b>
          </h4>
        </div>
        <div className="cuisines">
          <FormLabel component="legend">Cuisines</FormLabel>
          <RadioGroup
            aria-label="Cuisines"
            name="Cuisines"
            // value={value}
            // onChange={handleCategory}
          >
            <Divider />
            <FormControlLabel
              value="Chinese"
              control={<Radio />}
              label="Chinese"
            />
            <FormControlLabel
              value="North Indian"
              control={<Radio />}
              label="North Indian"
            />
            <FormControlLabel
              value="South Indian"
              control={<Radio />}
              label="South Indian"
            />
            <FormControlLabel
              value="Italian"
              control={<Radio />}
              label="Italian"
            />
            <FormControlLabel
              value="Bakery"
              control={<Radio />}
              label="Bakery"
            />
            <Divider />
          </RadioGroup>
        </div>
        <div id="sort">
          <h4 style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
            <b>Sort</b>
          </h4>
        </div>
        <div className="cuisines">
          <RadioGroup
            aria-label="sort"
            name="sort"
            // value={value}
            // onChange={handleCategory}
          >
            <Divider />
            <FormControlLabel
              value="Rating-High to Low"
              control={<Radio />}
              label="Rating-High to Low"
            />
            <FormControlLabel
              value="Rating-Low to High"
              control={<Radio />}
              label="Rating-Low to High"
            />
            <FormControlLabel
              value="Cost-High to Low"
              control={<Radio />}
              label="Cost-High to Low"
            />
            <FormControlLabel
              value="Cost-Low to High"
              control={<Radio />}
              label="Cost-Low to High"
            />
            <Divider />
          </RadioGroup>
        </div>
      </div>
      <div className="mainContent-r">
        <div id="restaurants">
          <h4 style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
            <b>Restaurants</b>
          </h4>
        </div>
        <div className="restaurants-content">
          {items &&
            items.map((item, index) => (
              <RestaurantCard
                Name={item.Name}
                Image={item.Image}
                Rating={item.Rating}
                time={item.time}
                cuisine={item.cuisine}
                discount={item.discount}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
