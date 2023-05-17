let itens = [];
let editIndex = -1; // Índice do item em edição (-1 se nenhum item estiver sendo editado)

function addItem() {
  const tituloInput = document.getElementById("input-titulo");
  const dataInput = document.getElementById("input-data");
  const descricaoInput = document.getElementById("input-descricao");
  const autorInput = document.getElementById("input-autor");

  const novoItem = {
    titulo: tituloInput.value.trim(),
    data: dataInput.value.trim(),
    descricao: descricaoInput.value.trim(),
    autor: autorInput.value.trim()
  };

  if (novoItem.titulo !== "") {
    if (editIndex === -1) {
      // Adicionar novo item
      itens.push(novoItem);
    } else {
      // Atualizar item em edição
      itens[editIndex] = novoItem;
      editIndex = -1; // Limpar o índice de edição
    }

    tituloInput.value = "";
    dataInput.value = "";
    descricaoInput.value = "";
    autorInput.value = "";
    atualizarLista();
  }
}

function editarItem(index) {
  const item = itens[index];
  const tituloInput = document.getElementById("input-titulo");
  const dataInput = document.getElementById("input-data");
  const descricaoInput = document.getElementById("input-descricao");
  const autorInput = document.getElementById("input-autor");

  tituloInput.value = item.titulo;
  dataInput.value = item.data;
  descricaoInput.value = item.descricao;
  autorInput.value = item.autor;

  editIndex = index; // Definir o índice do item em edição
}

function removerItem(index) {
  itens.splice(index, 1);
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista-itens");
  let listaHTML = "";

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i];
    listaHTML += `
      <li class="item">
        <div>
          <h3>${item.titulo}</h3>
          <p>Data de Publicação: ${item.data}</p>
          <p>Descrição: ${item.descricao}</p>
          <p>Autor: ${item.autor}</p>
        </div>
        <button onclick="editarItem(${i})">Editar</button>
        <button onclick="removerItem(${i})">Remover</button>
      </li>
    `;
  }

  lista.innerHTML = listaHTML;
}
