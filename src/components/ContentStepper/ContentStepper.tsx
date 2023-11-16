import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button, MobileStepper, Step, StepLabel, Stepper, useTheme } from '@mui/material';
import React, { useState } from 'react'

const ContentStepper = ({ activeStep, setActiveStep, steps, isMobileDevice, theme }: {
    activeStep: number,
    setActiveStep: (value: number) => void,
    steps: string[],
    isMobileDevice: boolean,
    theme: any
}) => {
    const handleNextStep = (index: number) => setActiveStep(index)

    return isMobileDevice ? (
        <>
            <MobileStepper
                variant="progress"
                steps={steps.length + 1}
                position="static"
                activeStep={activeStep}
                // sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={() => handleNextStep(activeStep + 1)} disabled={activeStep === steps.length}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={() => handleNextStep(activeStep - 1)} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </>
    ) : (
        <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((element, index) => (
                    <Step key={element} onClick={() => handleNextStep(index)}>
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