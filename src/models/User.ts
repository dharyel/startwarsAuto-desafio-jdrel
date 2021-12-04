export interface UserInfoInterface {
	personalInfo: {
		name: string;
		email: string;
		tel: string;
		registryNumber: string;
	},
	addressInfo: {
		postalCode: string;
		street: string;
		number: string;
		addressComplement: string;
		city: string;
		neighborhood: string;
		state: string;
	}
}
