export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id).reduce((a, b) => a + b, 0);
}
