import { buscarTarefas } from "./main.js";

const containerTasks = document.querySelector('#containerTasks')

function criarTarefa() {
    const tarefa = document.createElement('div')
    tarefa.innerHTML = `Titulo: -- | Prioridade: -- | Descrição: -- `

    return tarefa 
}

async function listarTodasAsTarefas() {
    const tarefas = await buscarTarefas()
    console.log(tarefas)

    tarefas.forEach(elemento => containerTasks.appendChild(criarTarefa(elemento.title)))
}
listarTodasAsTarefas()