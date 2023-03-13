export const nombreDelDiaSegunFecha = (fecha) => [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
][new Date(fecha).getDay()];
