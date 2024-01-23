$(document).ready(function() {
    // Adicionar tarefa ao submeter o formulário
    $('#form-list').submit(function(event) {
      event.preventDefault();
      const novaTarefa = $('#nova-tarefa').val();
      if (novaTarefa) {
        const listItem = $('<li>').text(novaTarefa);
        $('#form-list').append(listItem);
        $('#nova-tarefa').val('');
      }
    });
  
    // Marcar/desmarcar tarefa como concluída
    $('#form-list').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  