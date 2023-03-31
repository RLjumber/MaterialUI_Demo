import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
            sx={{
                border: '1px solid black',
                borderRadius: '4px',
            }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            What is included in the tour package?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Expand to know more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our tour package includes transportation, accommodation, meals, and entrance fees to attractions specified in the itinerary. However, please check the details of the tour package before booking to see if there are any specific exclusions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
            sx={{
                border: '1px solid black',
                borderRadius: '4px',
            }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>How many people can join a tour?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Expand to know more
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our tours can accommodate a range of group sizes, from private tours to larger groups. Please check the specific tour package details for the maximum number of participants.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
            sx={{
                border: '1px solid black',
                borderRadius: '4px',
            }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            How physically demanding are the tours?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Expand to know more
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our tours can vary in physical demand, from easy walking tours to more challenging treks. Please check the specific tour package details for the physical requirements and recommendations. Additionally, please inform us of any special needs or requests prior to booking.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
            sx={{
                border: '1px solid black',
                borderRadius: '4px',
            }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Can I customize my own tour?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Expand to know more
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer customizable tour packages to fit your specific needs and interests. Our experienced guides will ensure that you have a memorable and enriching experience, whether you're interested in cultural tours, outdoor adventures, or a mix of both. Contact us today to start planning your dream tour!
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

