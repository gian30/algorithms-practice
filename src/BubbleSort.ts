export default function bubble_sort(arr: number[]): void {
	for (let c = 0; c < arr.length; ++c) {
		for (let i = 0; i < arr.length - 1 - c; ++i) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}
}