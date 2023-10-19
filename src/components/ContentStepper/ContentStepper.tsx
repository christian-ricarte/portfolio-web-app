import { Box, Step, StepLabel, Stepper, useTheme } from '@mui/material';
import React, { useState } from 'react'

const ContentStepper = ({ activeStep, setActiveStep, steps }: {
    activeStep: number,
    setActiveStep: (value: number) => void,
    steps: string[]
}) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((element, index) => (
                    <Step key={element} onClick={() => setActiveStep(index)}>
                        <StepLabel>
                            {element}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default ContentStepper