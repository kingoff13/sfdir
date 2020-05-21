export class ApiClient 
{
    light_armor = [
        {
            id: 0,
            name: 'Вторая кожа',
            level: 1,
            price: 250,
            eca: 1,
            kca: 2,
            max_dext: 5,
        },
        {
            id: 1,
            name: 'Станционная одежда, полетная',
            level: 1,
            price: 95,
            eca: 0,
            kca: 1,
            max_dext: 6,
        },
        {
            id: 2,
            name: 'Эстексный комбинезон I',
            level: 1,
            price: 410,
            eca: 0,
            kca: 1,
            max_dext: 5,
        },
        {
            id: 3,
            name: 'Броня "Флибустьер" I',
            level: 2,
            price: 750,
            eca: 2,
            kca: 3,
            max_dext: 4,
        },
        {
            id: 4,
            name: 'Касатский микрокордовый костюм I',
            level: 2,
            price: 460,
            eca: 1,
            kca: 3,
            max_dext: 3,
        },
      ];

    heavy_armor = [
        {
            id: 0,
            name: 'Бронекостюм "Голем" I',
            level: 1,
            price: 250,
            eca: 2,
            kca: 5,
            max_dext: 0,
        },
        {
            id: 1,
            name: 'Лашунтская "Кольчуга" I',
            level: 1,
            price: 415,
            eca: 2,
            kca: 4,
            max_dext: 2,
        },
    ];

    query(entity) {
        return this[entity];
    }
}