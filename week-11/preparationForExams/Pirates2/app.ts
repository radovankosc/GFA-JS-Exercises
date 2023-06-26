import { Armada } from "./armada";
import { Ship } from "./ship";

let armada1 = new Armada();
armada1.fillArmada();

let armada2 = new Armada();
armada2.fillArmada();

armada1.war(armada2);
