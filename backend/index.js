const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./users.db');

// Cria tabela de usuários se não existir
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, nome TEXT, email TEXT UNIQUE, senha TEXT)');

const SECRET = 'SEGREDO_SUPER_SEGURO';

// Cadastro
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({erro: 'Campos obrigatórios'});
  const senhaCript = bcrypt.hashSync(senha, 8);
  db.run('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senhaCript], function(err) {
    if (err) return res.status(400).json({erro: 'Email já cadastrado'});
    res.json({sucesso: true});
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (!user) return res.status(401).json({erro: 'Usuário ou senha inválidos'});
    if (!bcrypt.compareSync(senha, user.senha)) return res.status(401).json({erro: 'Usuário ou senha inválidos'});
    // Gera token JWT
    const token = jwt.sign({ id: user.id, nome: user.nome, email: user.email }, SECRET, { expiresIn: '2h' });
    res.json({ token, nome: user.nome, email: user.email });
  });
});

app.listen(3333, () => console.log('Backend rodando na porta 3333'));