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
  background-color: #1f1f1f;
  color: #ffffff;
  margin-bottom: 1rem;
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
            expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
          >
            <Typography>{faq.question}</Typography>
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
