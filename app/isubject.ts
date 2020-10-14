export interface ISubject {
  name: string;
  id: string;
  precondition: string;
  passed: boolean;
  blocked: boolean;
  semester: number;
  credit: number;
  blocker: boolean;
}
