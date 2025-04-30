export default function two_crystal_balls(breaks: boolean[]): number {
	const floorsSize = breaks.length;
	const jumpSize = Math.round(Math.sqrt(floorsSize));
	let breakFound = false;
	let pendingBalls = 2;
	let currentFloor = jumpSize;
	const breakIndex = breaks.findIndex(Boolean);
	while (breakFound == false && currentFloor < floorsSize) {
		if (breaks[currentFloor] == true && pendingBalls == 2) {
			pendingBalls = 1;
			currentFloor -= jumpSize;
		} else if (breaks[currentFloor] == true && pendingBalls == 1) {
			pendingBalls = 0;
			breakFound = true;
		} else if (breaks[currentFloor] == false && pendingBalls == 2) {
			currentFloor += jumpSize;
		} else if (breaks[currentFloor] == false && pendingBalls == 1) {

			currentFloor += 1;
		}
	}
	return breakFound ? currentFloor : -1;
}