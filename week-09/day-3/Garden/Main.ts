import { Garden } from "./Garden";
import { Flower } from "./Flower";
import { Tree } from "./Tree";
let blueFlower = new Flower("blue", 0);
let yellowFlower = new Flower("yellow", 0);
let ArrOfFlower: Flower[] = [];
ArrOfFlower.push(blueFlower, yellowFlower);

let purpleTree = new Tree("purple", 0);
let orangeTree = new Tree("orange", 0);
let ArrOfTree: Tree[] = [];
ArrOfTree.push(purpleTree, orangeTree);

let garden = new Garden(ArrOfFlower, ArrOfTree);

garden.showGarden();

garden.watering(40);
garden.showGarden();

garden.watering(70);
garden.showGarden();
