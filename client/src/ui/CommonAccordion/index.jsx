import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CommonAccordion({
  title,
  children,
  accordionStyle = {},
  summaryStyle = {},
  detailsStyle = {},
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ ...accordionStyle }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ ...summaryStyle }}
        className="text-black"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails sx={{ ...detailsStyle }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
