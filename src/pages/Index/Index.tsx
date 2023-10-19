import { Box, LinearProgress, Step, StepLabel, Stepper, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Content, ContentStepper } from '../../components';
import { Zoom } from '@mui/material';

const steps = [
  'Início',
  'Sobre',
  'Tecnologias',
  'Projetos',
  'Contato',
];


const Index = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box component="main" width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Zoom>
        <Content />
      </Zoom>
      <Box display="flex" justifyContent="space-around" height="98.5%">
        <Content currentStep={activeStep} />
        <ContentStepper activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />
      </Box>
      <LinearProgress variant="determinate" value={activeStep ? ((activeStep + 1) / steps.length) * 100 : 0} style={{
        height: "1.5%"
      }} />
    </Box>
  );
}

export default Index;