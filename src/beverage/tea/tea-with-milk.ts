import { Tea } from "./tea";

export class TeaWithMilk extends Tea {
	public price(): number {
		return super.price() + 0.1;
	}
}
