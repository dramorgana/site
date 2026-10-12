export interface ServiceItem {
	name: string;
	text: string;
	icon: string;
}

export interface ServicesContent {
	kicker: string;
	title: string;
	description: string;
	whatsappUrl: string;
	services: ServiceItem[];
}
