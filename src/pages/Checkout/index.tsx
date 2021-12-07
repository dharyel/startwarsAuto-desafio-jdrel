import {observer} from 'mobx-react-lite';
import VehicleStore from "../../stores/VehicleStore"; 
import ShopCartStore from "../../stores/ShopCartStore"; 
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '../../components/TextField';
import { useState } from 'react';

import axios from 'axios';

import * as Yup from 'yup';

import { 
    CheckoutWrapper, 
    Container, 
    FormikWrapper,
    UserPaymentWrapper, 
    Infos,
    CreditCard,
    PaymentMethod
} from './styles';
import { CheckoutResume } from '../../components/CheckoutResume';
import { RadioField } from '../../components/RadioField';
import { FormikValues } from 'formik';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState<'boleto' | 'creditCard'>('boleto');

    const vehiclesStore = useContext(VehicleStore);
    const { selectedVehicle } = vehiclesStore;

    const shopStore = useContext(ShopCartStore);
    const { SetBoughtItem } = shopStore;

    const navigate = useNavigate();

    const initialValues = {
        //userInfo
        name: '',
        email: '',
        tel: '',
        registryNumber: '',
        postalCode: '',
        street: '',
        number: '',
        addressComplement: '',
        city: '',
        neighborhood: '',
        state: '',
        //creditCard
        creditCardNumber: '',
        validity: '',
        ownerName: '',
        cvv: '',
    };

    const schema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Must be 3 characters or greather')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        tel: Yup.string()
            .min(11,'You need to insert a phone number with only numbers and in the format 00123456789(Example: 47991966020)')
            .max(11,'You need to insert a phone number with only numbers and in the format 00123456789(Example: 47991966020)')
            .required('Required'),
        registryNumber: Yup.string()
            .min(11, "Registry Number must be with 11 or 14 numbers total")
            .max(14, 'Registry Number must be with 11 or 14 numbers total')
            .required('Required'),
        postalCode: Yup.string()
            .min(8, "CEP must be 8 digits format")
            .max(8, 'CEP must be 8 digits format')
            .required('Required'),
        street: Yup.string()
            .required('Required'),
        number: Yup.string()
            .required('Required'),
        addressComplement: Yup.string(),
        city: Yup.string()
            .required('Required'),
        neighborhood: Yup.string()
            .required('Required'),
        state: Yup.string()
            .required('Required'),
        creditCardNumber: Yup.string()
            .min(13, 'Must be 13 digits or greather')
            .max(16, 'Must be 16 digits or less'),
        validity: Yup.string()
            .min(4, 'Must be 4 digits (mmyy)')
            .max(4, 'Must be 4 digits (mmyy)'),
        ownerName: Yup.string()
            .min(3, 'Must be 3 characters or greather')
            .max(30, 'Must be 30 characters or less'),
        cvv: Yup.string()
            .min(3, 'Must be 3 digits')
            .max(3, 'Must be 3 digits'),
    });

    const handlePaymentMethod = (method: 'boleto' | 'creditCard') => {
        setPaymentMethod(method);
    }

    const handleFinishCheckout = (values: FormikValues) => {
        if (!selectedVehicle)
            return;

        const creditCardInfo = {
            number: values.creditCardNumber as string,
            validity: values.validity as string,
            ownerName: values.ownerName as string,
            cvv: values.cvv as string,
        }
        
        SetBoughtItem(selectedVehicle, true, creditCardInfo);

        navigate('/checkout-result');
    }

    const handleCancelCheckout = () => {
        if (!selectedVehicle)
            return;

        console.log(`Você acabou de cancelar a compra de: ${selectedVehicle.name}`, selectedVehicle);

        window.scrollTo(0, 0);
        navigate('/');
    }

    const handleUpdateAddress = async (event: React.FocusEvent<HTMLInputElement>, setFieldValue: any) => {
        const value = event.target.value;

        //vai eliminar tudo o que não for número
        const cep = value?.replace(/[^0-9]/g, '');

        if (cep.length !== 8) 
            return;

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(({data}) => {
                setFieldValue('street', data.logradouro);
                setFieldValue('addressComplement', data.complemento);
                setFieldValue('city', data.localidade);
                setFieldValue('neighborhood', data.bairro);
                setFieldValue('state', data.uf);
            })
            .catch(error => console.log(error))
    }

    return(
        <Container>

            <h1>CHECKOUT</h1>

            <FormikWrapper
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={values => {
                    handleFinishCheckout(values);
                }}
            >
                {({isValid, setFieldValue, errors}) => (
                
                <CheckoutWrapper>
                    <UserPaymentWrapper>
                        <Infos>
                            <legend>Personal info</legend>
                            <TextField label="Name:" name="name" type="text" placeholder="Insert your name.." error={errors.name} />
                            <TextField label="Email:" name="email" type="email" placeholder="Insert your e-mail.." error={errors.email} />
                            <TextField label="Phone number:" name="tel" type="tel" placeholder="Ex. 47991966020.." error={errors.tel} />
                            <TextField label="CPF/CNPJ:" name="registryNumber" type="text" placeholder="Ex. 12345678901.." error={errors.registryNumber} />
                            <TextField label="CEP:" name="postalCode" type="text" placeholder="Insert your CEP.." 
                                handleUpdateAddress={(event: React.FocusEvent<HTMLInputElement>) => handleUpdateAddress(event, setFieldValue)}
                                error={errors.postalCode}
                            />
                            <TextField label="Street:" name="street" type="text" placeholder="Insert your Street name.." error={errors.street} />
                            <TextField label="Number:" name="number" type="text" placeholder="Insert your address number.." error={errors.number} />
                            <TextField label="Address Complement:" name="addressComplement" type="text" placeholder="Insert your Complement Address.." 
                                error={errors.addressComplement} />
                            <TextField label="City:" name="city" type="text" placeholder="Insert your city.." error={errors.city} />
                            <TextField label="Neighborhood:" name="neighborhood" type="text" placeholder="Insert your neighborhood.." error={errors.neighborhood} />
                            <TextField label="State:" name="state" type="text" placeholder="Insert your Federation Unit.." error={errors.state} />
                        </Infos>

                        <Infos>
                            <legend>Payment</legend>
                            <h2>Payment method:</h2><br />

                            <PaymentMethod>
                                <RadioField
                                    onClick={() => handlePaymentMethod('boleto')} 
                                    checked={paymentMethod === 'boleto'} 
                                    value="boleto" 
                                    label="Boleto:" 
                                    name="paymentMethod" 
                                    type="radio" 
                                />
                                <RadioField 
                                    onClick={() => handlePaymentMethod('creditCard')} 
                                    checked={paymentMethod === 'creditCard'} 
                                    value="creditCard" 
                                    label="Credit Card:" 
                                    name="paymentMethod" 
                                    type="radio" 
                                />
                            </PaymentMethod>

                            <CreditCard isCreditCard={paymentMethod === 'creditCard'} >
                                <TextField label="Number:" name="creditCardNumber" type="text" placeholder="Insert your credit card number.." error={errors.creditCardNumber} />
                                <TextField label="Validity:" name="validity" type="text" placeholder="Insert your credit card validity (Ex. 0122).." error={errors.validity} />
                                <TextField label="Owner:" name="ownerName" type="text" placeholder="Insert the credit card owner name.." error={errors.ownerName} />
                                <TextField label="CVV:" name="cvv" type="text" placeholder="Ex. 123" error={errors.cvv} />
                            </CreditCard>
                        </Infos>
                    </UserPaymentWrapper>
                    
                    <CheckoutResume 
                        selectedVehicle={selectedVehicle}
                        isFormValid={isValid} 
                        handleCancelCheckout={handleCancelCheckout} />
                </CheckoutWrapper>
                )}

            </FormikWrapper>
        </Container>
    );
}

export default observer(Checkout);