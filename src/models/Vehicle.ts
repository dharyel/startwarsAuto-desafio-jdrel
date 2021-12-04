export interface VehicleInterface {
	name: string;
	model: string;
	manufacturer: string;

	max_atmosphering_speed: string;
	length: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	cost_in_credits: string;
}

export interface VehiclesDataInterface {
	count: number;
	next: string;
	previous: string | null,
	results: VehicleInterface[];
}