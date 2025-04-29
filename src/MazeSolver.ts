declare type Point = {
	x: number;
	y: number;
}

const dir = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1]
]

function walk(maze: string[], wall: string, currentPos: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
	if (currentPos.x < 0 || currentPos.x >= maze[0].length || currentPos.y < 0 || currentPos.y >= maze.length) {
		return false;
	}
	if (maze[currentPos.y][currentPos.x] === wall) {
		return false;
	}
	if (currentPos.x === end.x && currentPos.y === end.y) {
		path.push(end);
		return true;
	}
	if (seen[currentPos.y][currentPos.x]) {
		return false;
	}

	seen[currentPos.y][currentPos.x] = true;
	path.push(currentPos)
	for (let i = 0; i < dir.length; ++i) {
		if (walk(maze, wall, {
			y: currentPos.y + dir[i][0], x: currentPos.x + dir[i][1]
		}, end, seen, path)) {
			return true;
		}
	}
	path.pop()
	return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	const seen: boolean[][] = [];
	const path: Point[] = [];
	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false));
	}
	walk(maze, wall, start, end, seen, path);
	return path;
}