export function combineMaps(map1, map2) {
    // Intermediate step not needed, but descriptive
    const arr1 = [...map1];
    const arr2 = [...map2];
    return new Map([...arr1, ...arr2]);
}
