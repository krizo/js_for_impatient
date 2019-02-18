export function sortObjectsByName(objs) {
    return objs.sort(function (o1, o2) {
        return o1.name.localeCompare(o2.name);
    });
}