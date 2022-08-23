// Code your solution here
function findMatching(drivers, name) {
    let found = drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
    return found;
}
function fuzzyMatch(drivers, hello) {
    let found = drivers.filter(driver => driver.startsWith(hello));
    return found;
}
function matchName(drivers, hello) {
    let found = drivers.filter((driver) => driver.name === hello);
    return found;
}