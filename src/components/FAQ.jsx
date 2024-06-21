import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const StyledAccordion = styled(Accordion)`
  background-color: #212f42f5 !important;
  color: #ffffff !important;
  margin-bottom: 1rem;
  max-width: 1200px;
  text-align: left;
  &.MuiAccordion-root:before {
    background-color: #333333;
  }
`;

const FAQ = ({ faqList }) => {
  return (
    <div>
      {faqList.map((faq, index) => (
        <StyledAccordion key={index}>
          <AccordionSummary
            sx={{ color: "#ffffff", borderBottom: "1px solid #494949" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
          >
            <Typography sx={{ fontWeight: "600" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
};

export default FAQ;
