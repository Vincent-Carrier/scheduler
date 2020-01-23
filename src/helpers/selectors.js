export function getAppointmentsForDay(state, day) {
  const match = state.days.find(d => d.name === day);
  const appointments = match ? match.appointments : [];
  return appointments.map(id => state.appointments[`${id}`]);
}
