import { VehicleInterface } from "../../models/Vehicle";
import { 
    CancelCheckout, 
    FinishCheckout, 
    ResumeDetailText, 
    ResumeTitle, 
    ResumeTotalText, 
    ResumeWrapper 
} from './styles';

interface CheckoutResumeProps {
    selectedVehicle: VehicleInterface | null;
    isFormValid: boolean;
    handleCancelCheckout: () => void;
}

export const CheckoutResume = ({ selectedVehicle, isFormValid, handleCancelCheckout}: CheckoutResumeProps) => {
    return (
        <ResumeWrapper>
            <ResumeTitle>RESUME</ResumeTitle>

            <hr />

            <ResumeDetailText>Product name: {selectedVehicle && selectedVehicle.name}</ResumeDetailText>
            <ResumeDetailText>Product price: $ {selectedVehicle && selectedVehicle.cost_in_credits}</ResumeDetailText>
            
            <hr />

            <ResumeTotalText>TOTAL: $ <span>{selectedVehicle && selectedVehicle.cost_in_credits}</span></ResumeTotalText>

            <FinishCheckout disabled={!isFormValid} type="submit">BUY</FinishCheckout>
            <CancelCheckout type="button" onClick={handleCancelCheckout}>CANCEL</CancelCheckout>
        </ResumeWrapper>
    );
}