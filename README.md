# PassportPal

### Description: Your virtual passport. Add countries to your Bucketlist and plan your trip. Add countries you've vistied to a virtual passport and add your own content. 

### User Stories:
- Click on cards to mark as 'favorite' and create a travel Bucket List with own notes. 
- Add travel destinations to main list
- Sort destinations alphabetically
- Filter by region
- Search for specific city

### Wireframe
[Main Page](https://www.figma.com/file/JMLkQ0CieBgAffyyFsI3h6/Phase-2-Portfolio-Demo-(Copy)?type=design&node-id=102-36&t=bOKV0RYcbP11qvWm-0)

<img src="https://github.com/sarahadean/phase2-project/assets/128323898/a8fe4743-bed2-454c-94da-378c198e0b3c" width="300px">
Home Page
<img src="https://github.com/sarahadean/phase2-project/assets/128323898/5f44c66f-82cd-4372-8d6d-a228368f5e85" width="300px">
Favorite's Page

### Component Tree 
![Screenshot 2023-05-16 at 2 13 59 PM](https://github.com/sarahadean/phase2-project/assets/128323898/ee9f1be4-3b82-4de9-95c3-fbd578821998)


### API Routes

API: https://restcountries.com/#fields
| API Route      | Method Request | Body                                   | Response                               |
|----------------|----------------|----------------------------------------|----------------------------------------|
| /capitals      | GET            |                                        | [{..}, {..}, ...]                      |
| /capitals      | POST           | {capital, country, flag, region, currency} | {capital, country, flag, region, currency} |
| /favorites     | POST           | {capital, country, flag, region, currency} | {capital, country, flag, region, currency} |
| /favorites/:id | DELETE         |                                        | {}                                     |
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

| Client Routes 	| Components 	|
|---	|---	|
| “/” 	| Home.js 	|
| ./about 	| About.js 	|
| ./favorites 	| Favorites.js 	|
| ./form   | Form.js |

### Trello
![Trello Board](https://github.com/sarahadean/phase2-project/assets/128323898/58890915-16d9-4c5c-b7e3-ff8d2c2d2371)



