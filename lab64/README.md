Para testar a página inicial:

curl http://127.0.0.1:3000/ - no cmd

Para testar a página Sobre:
curl http://127.0.0.1:3000/about - no cmd

Para testar upload de arquivo:
curl -X POST -F "file=@caminho_para_arquivo/arquivo.txt" http://127.0.0.1:3000/upload - no cmd

Para testar o erro 404:
curl http://127.0.0.1:3000/qualquer_outra_coisa - no cmd

Outros testes:
curl -X POST -H "Content-Type: application/json" -d "{\"nome\": \"João\", \"idade\": 30}" http://localhost:3000/post - no cmd
