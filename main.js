const url =  "https://backend-e47a.onrender.com/alunos"
//const url =  "http://localhost:5000/alunos"
import {ListaAlunos} from './ListaAlunos.js'

async function buscaDados(){
    const listaAlunos = []
    const res = await fetch(url)
    const data = await res.json()
    data.map((aluno)=>{
        listaAlunos.push(aluno)
    })

    return listaAlunos
} 




/* async function clonar(lista){
    const url =  "https://backend-e47a.onrender.com/alunos/clonar"
    await  lista.map((aluno)=>{
        fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(aluno)
        })
    })
} */

let listaAlunos = await buscaDados()


const alunos = new ListaAlunos()

const inputPesquisar = document.querySelector('#input-pesquisar')
const selectedTurmas = document.querySelector('#selected-turmas')


alunos.carregadados(listaAlunos)

inputPesquisar.addEventListener('keyup', (e)=>{
    const turma = selectedTurmas.options[selectedTurmas.selectedIndex].value;
    let lista = [...listaAlunos]
    lista = alunos.filtraAlunos(lista, e.target.value.toUpperCase(), turma)
    alunos.carregadados(lista)
})

selectedTurmas.addEventListener("change", (e)=> {
    const turma = e.target.value;
    let lista = [...listaAlunos]
    lista = alunos.filtraAlunos(lista, inputPesquisar.value.toUpperCase(), turma)
    alunos.carregadados(lista)
});
