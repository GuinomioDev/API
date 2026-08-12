const express = require('express');
const cors = require('cors'); // 1. Importa o pacote CORS

const app = express();

app.use(cors()); // 2. Libera o acesso para qualquer origem (resolve o erro!)

// Suas rotas continuam aqui...
const usuarios = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@email.com", idade: 28, cidade: "São Paulo", ativo: true },
  { id: 2, nome: "Carlos Oliveira", email: "carlos.o@email.com", idade: 35, cidade: "Rio de Janeiro", ativo: false },
  { id: 3, nome: "Beatriz Mendes", email: "bea.mendes@email.com", idade: 22, cidade: "Belo Horizonte", ativo: true },
  { id: 4, nome: "Diego Fernandes", email: "diego.f@email.com", idade: 41, cidade: "Curitiba", ativo: true },
  { id: 5, nome: "Eduarda Costa", email: "duda.costa@email.com", idade: 19, cidade: "Porto Alegre", ativo: false }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === Number(req.params.id));
  
  if (!usuario) return res.status(404).json({ mensagem: "Não encontrado" });

  // Cria um novo objeto apenas com os dados públicos
  const usuarioPublico = {
    id: usuario.id,
    nome: usuario.nome,
    cidade: usuario.cidade
  };

  res.json(usuarioPublico);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
