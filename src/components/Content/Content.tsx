import Placeholder from "../Placeholder/Placeholder";
import { StepEnum } from "./types";

const Content = ({ currentStep }: any) => {
    switch (currentStep) {
        case StepEnum.Placeholder:
            return <Placeholder />
        default:
            return <></>;
    }
}

export default Content