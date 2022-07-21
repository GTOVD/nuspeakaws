interface elapsedTimeType {
    year: number;
    month: number;
    week: number;
    day: number;
    hour: number;
    minute: number;
}

export default function millisecondsToElapsedTime(
    createdAtDate: string
): string {
    const elapsedMilliseconds: number = Date.now() - Date.parse(createdAtDate);
    const elapsedTime: elapsedTimeType = {
        year: elapsedMilliseconds / 3155695200,
        month: elapsedMilliseconds / 2629746000,
        week: elapsedMilliseconds / 604800000,
        day: elapsedMilliseconds / 86400000,
        hour: elapsedMilliseconds / 3600000,
        minute: elapsedMilliseconds / 60000,
    };
    return elapsedTime.year > 1
        ? `${Math.floor(elapsedTime.year)} year${
              elapsedTime.year > 2 ? "s" : ""
          } ago`
        : elapsedTime.month > 1
        ? `${Math.floor(elapsedTime.month)} month${
              elapsedTime.month > 2 ? "s" : ""
          } ago`
        : elapsedTime.week > 1
        ? `${Math.floor(elapsedTime.week)} week${
              elapsedTime.week > 2 ? "s" : ""
          } ago`
        : elapsedTime.day > 1
        ? `${Math.floor(elapsedTime.day)} day${
              elapsedTime.day > 2 ? "s" : ""
          } ago`
        : elapsedTime.hour > 1
        ? `${Math.floor(elapsedTime.hour)} hour${
              elapsedTime.hour > 2 ? "s" : ""
          } ago`
        : elapsedTime.minute > 1
        ? `${Math.floor(elapsedTime.minute)} minute${
              elapsedTime.minute > 2 ? "s" : ""
          } ago`
        : "just now";
}
