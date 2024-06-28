export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach((task) => {
        console.log(task.dateFotmat);
        if ( !unique.includes(task.dateFotmat)) unique.push(task.dateFotmat);
    });

    return unique;
}