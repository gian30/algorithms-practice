export default function bs_list(haystack: number[], needle: number): boolean {
	if (haystack.length === 0) return false;

	const middle = Math.floor(haystack.length / 2);

	if (haystack[middle] === needle) {
		return true;
	} else if (haystack[middle] < needle) {
		return bs_list(haystack.slice(middle + 1), needle);
	} else {
		return bs_list(haystack.slice(0, middle), needle);
	}
}
