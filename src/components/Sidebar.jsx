import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants.js";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        className="category-btn"
        onClick={() =>
          setSelectedCategory({
            name: category.name,
            displayName: category.displayName,
          })
        }
        style={{
          background: category.name === selectedCategory.name && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory.name ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.displayName}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
