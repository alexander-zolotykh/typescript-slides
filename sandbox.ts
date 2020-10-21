enum EHardDrive {
	HDD,
	SSD
}

interface Computer {
	cpu: {
		amount: number;
		frequency: number;
	};
	ram: number;
	hardDriveType: EHardDrive;
}

type Smartphone = Omit<Computer, "hardDriveType">;
type Tablet = Pick<Computer, "cpu" | "ram">;

declare const pc: Computer;
declare const phone: Smartphone;
declare const tablet: Tablet;

pc.hardDriveType
phone.hardDriveType
tablet.hardDriveType
tablet.cpu

pc.ram = 160000000

type ReadonlyComputer = Readonly<Computer>;

declare const roPc: ReadonlyComputer;

roPc.ram = 160000000;

type RoPCCollection = Record<number, ReadonlyComputer>;

const roPCList: RoPCCollection = [roPc, roPc, roPc, pc, tablet, phone];

type MobileDevices = Smartphone | Tablet;
type AllDevices = Smartphone | Tablet | Computer | ReadonlyComputer;

//

type MyTablet = Exclude<MobileDevices, Smartphone>
type MyTablet2 = Exclude<AllDevices, Smartphone | Computer | ReadonlyComputer>
type MyTablet3 = Extract<AllDevices, Tablet>

type Device = Partial<Computer>;

const someDevice: Computer = {
	ram: 1,
	hardDriveType: EHardDrive.HDD,
	cpu: {
		amount: 1,
		frequency: 1000,
	}
};

const someDevice2: Device = {
	cpu: {
		amount: 1,
		frequency: 1000,
	}
}

type DeviceAllRequired = Required<Device>;

const someDevice3: DeviceAllRequired = {
	cpu: {
		amount: 1,
		frequency: 1000,
	},
	hardDriveType: EHardDrive.HDD,
	ram: 1000,
}

function getPC(): Computer {

}

type RTypeForGetPCFunction = ReturnType<typeof getPC>;

const somePC: RTypeForGetPCFunction = {
	cpu: {
		amount: 1,
		frequency: 1000,
	},
	hardDriveType: EHardDrive.HDD,
	ram: 1000,
};
