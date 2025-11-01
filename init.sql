CREATE TABLE
    category (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(200),
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW ()
    );

CREATE TABLE
    product (
        id SERIAL PRIMARY KEY,
        category_id INTEGER REFERENCES category (id) ON DELETE CASCADE NOT NULL,
        display_name VARCHAR(200) NOT NULL,
        description VARCHAR(200),
        brand VARCHAR(50),
        price DECIMAL NOT NULL,
        image_path VARCHAR(500) NOT NULL,
        storage INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW ()
    );

INSERT INTO
    category (name, description)
VALUES
    ('PIJAMAS', 'Pijamas confortáveis'),
    ('ACESSORIOS', 'Acessórios estilosos e úteis'),
    ('SKINCARE', 'Cuidados de pele'),
    ('BASE', 'Bases de rosto'),
    ('BATONS', 'Variedades de batons'),
    ('BLUSH', 'Blushs para maquiagem'),
    ('CORPO', 'Hidratantes, body splash e muito mais'),
    ('DELINEADOR', 'Maquiagem de olho'),
    ('BLINDAGEM', 'Blindagem de maquiagem'),
    ('UNHAS', 'Esmaltes, cola unhas e muito mais'),
    ('CILIOS', 'Cilios postiços');

INSERT INTO
    product (
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
        1,
        'Baby Doll - M',
        'Pijama fofo e delicado',
        'DreamWear',
        10.00,
        '/images/products/babydoll-m.jpg',
        50
    ),
    (
        2,
        'Bag - M',
        'Bolsa de couro de tamanho médio',
        'UrbanStyle',
        10.00,
        '/images/products/bag-m.jpg',
        50
    );