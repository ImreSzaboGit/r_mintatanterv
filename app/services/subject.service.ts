import {Injectable} from '@angular/core';
import {ISubject} from '../isubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  actualSubjects: ISubject[];

  constructor() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.actualSubjects = JSON.parse(JSON.stringify(SUBJECTS));
  }

}
const SUBJECTS = [
  {
    name: 'Digitális alkalmazások',
    id: 'BAI0001',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 1,
    credit: 3,
    blocker: false
  },
  {
    name: 'Lineáris algebra',
    id: 'BPI1101',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 1,
    credit: 6,
    blocker: false
  },
  {
    name: 'Logikai alapok a programozáshoz',
    id: 'BPI1102',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 1,
    credit: 5,
    blocker: false
  },
  {
    name: 'Programozási nyelvek I.',
    id: 'BPI1103',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 1,
    credit: 6,
    blocker: false
  },
  {
    name: 'Számítógép architektúrák',
    id: 'BPI1105',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 1,
    credit: 3,
    blocker: false
  },
  {
    name: 'Bevezetés az informatikába',
    id: 'BPI1106',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 1,
    credit: 4,
    blocker: false
  },
  {
    name: 'Környezet és ember',
    id: 'BAI0002',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 2,
    credit: 2,
    blocker: false
  },
  {
    name: 'Diszkrét matematika',
    id: 'BPI1207',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 2,
    credit: 6,
    blocker: false
  },
  {
    name: 'Adatszerkezetek és algoritmusok',
    id: 'BPI1208',
    precondition: 'BPI1103',
    passed: false,
    blocked: false,
    semester: 2,
    credit: 3,
    blocker: false
  },
  {
    name: 'Programozási nyelvek II.',
    id: 'BPI1204',
    precondition: 'BPI1103',
    passed: false,
    blocked: false,
    semester: 2,
    credit: 6,
    blocker: false
  },
  {
    name: 'Operációs rendszerek',
    id: 'BPI1209',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 2,
    credit: 6,
    blocker: false
  },
  {
    name: 'Adatbázisrendszerek',
    id: 'BPI1210',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 2,
    credit: 5,
    blocker: false
  },
  {
    name: 'Analízis',
    id: 'BPI1111',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 6,
    blocker: false
  },
  {
    name: 'Operációkutatás',
    id: 'BPI1112',
    precondition: 'BPI1101',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 5,
    blocker: false
  },
  {
    name: 'Programozási technológiák',
    id: 'BPI1113',
    precondition: 'BPI1103',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 4,
    blocker: false
  },
  {
    name: 'Hálózati architektúrák és osztott rendszerek',
    id: 'BPI1114',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 3,
    blocker: false
  },
  {
    name: 'Szakmai gyakorlat I.',
    id: 'BPI1115',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 0,
    blocker: false
  },
  {
    name: 'A rendszerfejlesztés technológiája és módszertana',
    id: 'BPI2118',
    precondition: 'BPI1204',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 5,
    blocker: false
  },
  {
    name: 'Rendszerközeli programozás',
    id: 'BPI2119',
    precondition: 'BPI1209',
    passed: false,
    blocked: false,
    semester: 3,
    credit: 3,
    blocker: false
  },
  {
    name: 'Numerikus analízis',
    id: 'BPI1220',
    precondition: 'BPI1111',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 4,
    blocker: false
  },
  {
    name: 'Valószínűségszámítás és statisztika',
    id: 'BPI1221',
    precondition: 'BPI1111',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 5,
    blocker: false
  },
  {
    name: 'Algoritmusok tervezése és elemzése',
    id: 'BPI1222',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 3,
    blocker: false
  },
  {
    name: 'Programozási környezetek',
    id: 'BPI1223',
    precondition: 'BPI1204',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 3,
    blocker: false
  },
  {
    name: 'Internet eszközök és szolgáltatások',
    id: 'BPI1224',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 4,
    blocker: false
  },
  {
    name: 'Szakmai gyakorlat II.',
    id: 'BPI1216',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 0,
    blocker: false
  },
  {
    name: 'Számítógépi grafika',
    id: 'BPI2225',
    precondition: 'BPI1103',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 4,
    blocker: false
  },
  {
    name: 'Linux és shell programozás',
    id: 'BPI2226',
    precondition: 'BPI1209',
    passed: false,
    blocked: false,
    semester: 4,
    credit: 3,
    blocker: false
  },
  {
    name: 'Formális nyelvek, automaták',
    id: 'BPI1127',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 4,
    blocker: false
  },
  {
    name: 'Szakdolgozat I.',
    id: 'BPI1128',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 10,
    blocker: false
  },
  {
    name: 'Szakmai gyakorlat III.',
    id: 'BPI1117',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 0,
    blocker: false
  },
  {
    name: 'Mobilalkalmazás-fejlesztés',
    id: 'BPI2130',
    precondition: 'BPI1113',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 4,
    blocker: false
  },
  {
    name: 'Adatbázisrendszerek üzemeltetése',
    id: 'BPI2131',
    precondition: 'BPI1210',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 3,
    blocker: false
  },
  {
    name: 'Hálózati operációs rendszerek és IoT technológia',
    id: 'BPI2132',
    precondition: 'BPI1209',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 3,
    blocker: false
  },
  {
    name: 'Számítógépes szimulációk módszertana',
    id: 'BPI2133',
    precondition: 'BPI1103',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 3,
    blocker: false
  },
  {
    name: 'GUI programozás',
    id: 'BPI2134',
    precondition: 'BPI1113',
    passed: false,
    blocked: false,
    semester: 5,
    credit: 4,
    blocker: false
  },
  {
    name: 'Mesterséges intelligencia',
    id: 'BPI1235',
    precondition: 'BPI1204',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 4,
    blocker: false
  },
  {
    name: 'Számításelmélet',
    id: 'BPI1236',
    precondition: 'BPI1127',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 3,
    blocker: false
  },
  {
    name: 'Fordítóprogramok',
    id: 'BPI1237',
    precondition: 'BPI1127',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 3,
    blocker: false
  },
  {
    name: 'Informatikai jogi és vállalkozási ismeretek',
    id: 'BPI1238',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 3,
    blocker: false
  },
  {
    name: 'Szakdolgozat II.',
    id: 'BPI1229',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 10,
    blocker: false
  },
  {
    name: 'Játékelmélet',
    id: 'BPI2239',
    precondition: 'BPI2133',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 3,
    blocker: false
  },
  {
    name: 'Informatikai biztonság',
    id: 'BPI2240',
    precondition: '',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 3,
    blocker: false
  },
  {
    name: 'Web-alkalmazas-fejlesztés projektmunkában',
    id: 'BPI2241',
    precondition: 'BPI1204',
    passed: false,
    blocked: false,
    semester: 6,
    credit: 3,
    blocker: false
  }
];
