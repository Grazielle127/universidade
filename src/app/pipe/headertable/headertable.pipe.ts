import{Pipe, PipeTransform} from '@angular/core'



@Pipe({
  name:'headertable'

})
export class TranslateHeaderTablePipe implements PipeTransform  {

  transform(value: any, ...args: any[]) {
  return  this.convert(value)[value]

  }
 private convert(value:any) :any {
    return{
      id:'Id',
      name: 'Nome',
      age: 'Idade',
      course: 'Curso',
      semester: 'Semestre'
    }

  }
}
