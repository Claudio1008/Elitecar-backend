CREATE TABLE cliente (
id_cliente SERIAL PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
cpf VARCHAR(11) UNIQUE NOT NULL,
telefone VARCHAR(16)
);

CREATE TABLE carro (
id_carro SERIAL PRIMARY KEY,
marca VARCHAR(50) NOT NULL,
modelo VARCHAR(50) NOT NULL,
ano INT,
cor VARCHAR(20)
);

CREATE TABLE pedido_venda (
id_pedido SERIAL PRIMARY KEY,
id_cliente INT NOT NULL,
id_carro INT NOT NULL,
data_pedido DATE NOT NULL,
valor_pedido DECIMAL(6) NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
FOREIGN KEY (id_carro) REFERENCES carro(id_carro)
);

SELECT * FROM carro

INSERT INTO carro (marca , modelo , ano , cor) VALUES
('chevrolet', 'cruze', 2016, 'branco'),
('honda', 'civic', 2018, 'prata'),
('audi', 'R8', 2021, 'preto'),
('porsche', 'macan', 2019, 'branco'),
('chevrolet', 'prisma', 2014, 'cinza');

SELECT * FROM cliente

INSERT INTO cliente (nome , cpf , telefone ) VALUES
('vinicius', 45535794572, '16921673439'),
('pedro',  41235745729, '16991307842'),
('marcos',  49585797578, '16993210745'),
('felipe',  3905334532, '16923411950'),
('joao',  32133294892, '16987023157');

SELECT * FROM pedido_venda

INSERT INTO pedido_venda (id_cliente , id_carro , data_pedido , valor_pedido) VALUES
(1, 3, '2023-08-12', '478000'),
(2, 1, '2019-03-26', '59000'),
(3, 2, '2024-02-07', '117000'),
(4, 5, '2021-05-11', '48000'),
(5, 4, '2022-01-10', '279000');