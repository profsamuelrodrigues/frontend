

const tabela = document.querySelector('tbody')
const inputTotalAlunos = document.querySelector('#input-total-alunos')



export class ListaAlunos{
   constructor(){
    
   }

    filtraAlunos(listaAlunos, texto, turma){
       
        const lista = listaAlunos.filter((aluno)=>{
            if (turma == 'Todas as turmas') {
                return aluno.nome.includes(texto)
            }else{
                return (aluno.nome.includes(texto) && aluno.turma == turma)
            }
           
        })

        return lista
    }

    compare(a, b) {
        if (a.nome < b.nome)
            return -1;
        if (a.nome > b.nome)
            return 1;
        return 0;
    }

    carregadados(listaAlunos){
        listaAlunos.sort(this.compare) 
        tabela.innerHTML = ''
        listaAlunos.map((aluno)=>{
            tabela.innerHTML+= 
            `
            <tr class="linha">
                <td>${aluno.matricula}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.turma}</td>
            </tr>
            `
        })
        inputTotalAlunos.value = 'Total de alunos: ' + listaAlunos.length
    }
}