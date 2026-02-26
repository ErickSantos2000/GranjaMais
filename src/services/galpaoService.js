import BASE_URL from './api';

 const galpaoService = {
   // Função para buscar todos os galpões (GET)
   async listar() {
     
       const response = await fetch(`${BASE_URL}/galpoes`);
       if (!response.ok) throw new Error('Erro ao buscar galpões');
       return await response.json(); // Converte a resposta para JSON
       
      },
   
      // Função para cadastrar um novo galpão (POST)
      async cadastrar(novoGalpao) {
        
          const response = await fetch(`${BASE_URL}/galpoes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Obrigatório para enviar JSON
            },
            body: JSON.stringify(novoGalpao), // Transforma o objeto JS em texto JSON
          });
   
          if (!response.ok) throw new Error('Erro ao cadastrar galpão');
          return await response.json();
        
      }
    };
   
    export default galpaoService;
