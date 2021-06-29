export class Item {
  public classroomName: string;
  public studentNumber: number;
  public chairNumber: number;

  constructor(
    classroomName?: string,
    studentNumber?: number,
    chairNumber?: number
  ) {
    this.classroomName = classroomName || "";
    this.studentNumber = studentNumber || 0;
    this.chairNumber = chairNumber || 0;
  } 
}
