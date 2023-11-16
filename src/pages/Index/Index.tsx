import { Box, LinearProgress, MobileStepper, Step, StepLabel, Stepper, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Content, ContentStepper } from '../../components';
import { useWindowSize } from '@uidotdev/usehooks';

const steps = [
  'Início',
  'Sobre',
  'Tecnologias',
  'Projetos',
  'Contato',
];


const Index = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { width, height } = useWindowSize()
  const theme = useTheme();
  const isMobileDevice = width !== null && width < 800

  return (
    <Box component="main" width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Box display="flex" flexDirection={isMobileDevice ? "column" : "row"} justifyContent={isMobileDevice ? "space-between" : "space-around"} height="98.5%">
        <Content currentStep={activeStep} />
        <ContentStepper activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} isMobileDevice={isMobileDevice} theme={theme} />
      </Box>
      {isMobileDevice ? (
        <></>
      ) : (
        <LinearProgress variant="determinate" value={activeStep ? ((activeStep + 1) / steps.length) * 100 : 0} style={{
          height: "1.5%"
        }} />
      )}
    </Box>
  );
}

export default Index;