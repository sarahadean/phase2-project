# phase2-project

### Description: Learn about different capital cities from around the world

### User Stories:
- Click on each card to view information about city (image, population, flag, location, animals)
- Create your own 'Bucket List' -  Add and delete cities
- Sort cities by population size, alphabetically
- Filter by continent
- Search for specific city!

### Wireframe
[Main Page](https://github.com/sarahadean/phase2-project/assets/128323898/061d46e6-d3be-4f4f-b1e5-b1c29eee403f)

<img src="./assets/128323898/a8fe4743-bed2-454c-94da-378c198e0b3c" width="300px">



### Component Tree

### API Routes
  
| API Route                               | Method Request | Body                                   | Response                               |
|-----------------------------------------|----------------|----------------------------------------|----------------------------------------|
| /all?fields=name,capital,currencies     | GET            |                                        | [{..}, {..}, ...]                      |
| /all?fields=name,capital,currencies     | POST           | {capital, country, flag, about, image} | {captial, country, flag, about, image} |
| /all?fields=name,capital,currencies/:id | DELETE         |                                        | {}                                     |

### Example Data

```
{
    "name": {
      "common": "Spain",
      "official": "Kingdom of Spain",
      "nativeName": {
        "spa": {
          "official": "Reino de España",
          "common": "España"
        }
      }
    },
    "currencies": {
      "EUR": {
        "name": "Euro",
        "symbol": "€"
      }
    },
    "capital": [
      "Madrid"
    ]
  },
```

### Client Side Routes


### Trello
![Trello Board](https://github.com/sarahadean/phase2-project/assets/128323898/58890915-16d9-4c5c-b7e3-ff8d2c2d2371)



