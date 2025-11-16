CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    slug VARCHAR(200) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL REFERENCES category (category_id) ON DELETE CASCADE,
    display_name VARCHAR(200) NOT NULL,
    description VARCHAR(200),
    brand VARCHAR(50),
    price DECIMAL NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    storage INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO category (slug, name, description)
VALUES
    ('pijamas', 'PIJAMAS', 'Pijamas confortáveis'),
    ('acessorios', 'ACESSORIOS', 'Acessórios estilosos e úteis'),
    ('skincare', 'SKINCARE', 'Cuidados de pele'),
    ('base', 'BASE', 'Bases de rosto'),
    ('batons', 'BATONS', 'Variedades de batons'),
    ('blush', 'BLUSH', 'Blushs para maquiagem'),
    ('corpo', 'CORPO', 'Hidratantes, body splash e muito mais'),
    ('delineador', 'DELINEADOR', 'Maquiagem de olho'),
    ('blindagem', 'BLINDAGEM', 'Blindagem de maquiagem'),
    ('unhas', 'UNHAS', 'Esmaltes, cola unhas e muito mais'),
    ('cilios', 'CILIOS', 'Cílios postiços');

INSERT INTO product (
    category_id,
    display_name,
    description,
    brand,
    price,
    image_path,
    storage
)
VALUES
    (
        5,
        'Gloss Rosa 250ml',
        'Descrição do gloss rosa elegante bem longa para testar o campo',
        'White Label',
        10.00,
        'product-1.png',
        50
    ),
    (
        5,
        'Gloss Marrom 250ml',
        'Descrição do gloss marrom elegante bem longa para testar o campo',
        'White Label',
        10.00,
        'product-2.png',
        50
    ),
    (
        2,
        'Kit Escovas de Cabelo',
        'Descrição do kit de escovas de cabelo bem longa para testar o campo',
        'White Label',
        10.00,
        'product-3.png',
        50
    ),
    (
        5,
        'Batom Marrom Brilhoso',
        'Descrição do batom marrom brilhoso bem longa para testar o campo',
        'White Label',
        10.00,
        'product-4.png',
        50
    );
