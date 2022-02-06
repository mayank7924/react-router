import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div style={{ padding: "1rem 0" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            This is the About section
          </Typography>
          <Typography variant="body2">
            Welcome to the the react-router-dom.
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}



