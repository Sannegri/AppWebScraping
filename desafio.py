from bs4 import BeautifulSoup
import requests
import json

page = requests.get("https://nerdstore.com.br/categoria/especiais/game-of-thrones")
soup = BeautifulSoup(page.content)

list_item_produto = soup.find('h2', attrs={'class': 'woocommerce-loop-product__title'})
nameProduto = list_item_produto.text.strip()
nomeDoProduto = nameProduto


list_item_preço = soup.find('span', attrs={'class': 'woocommerce-Price-amount amount'})
preço = list_item_preço.text.strip()
PrecoProduto = preço

#
list_item_link_img = soup.find('img', attrs={'class': 'attachment-woocommerce_thumbnail size-woocommerce_thumbnail'})
link_img = list_item_link_img.get('src')
LinkUrlImg = link_img


nomeProdutoFrase = 'Nome do Produto: '
PrecoFrase = 'Preço: '
LinkFrase = 'Link da Imagem: '

texto = []
texto = nomeProdutoFrase + nomeDoProduto, PrecoFrase + PrecoProduto, LinkFrase + LinkUrlImg
#
with open('Desafio.json', 'w', encoding='utf-8') as json_file:
    json.dump(texto, json_file,ensure_ascii=False)

print(texto)
