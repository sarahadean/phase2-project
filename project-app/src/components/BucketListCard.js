import { useState } from 'react'
function HotelForm () {
}
export default function BucketListCard ({info, updateBucketList }) {
    const {country, flag, continent} = info
    const [restaurants, setRestaurants] = useState(['restaurants', 'restaurants'])
    const [attractions, setAttractions] = useState([])
    const [hotels, setHotels] = useState([])

    const formOutline = {
        restaurants: '',
        attractions: '',
        hotels: '',
    }
    const [form, setForm] = useState('')

    function updateForm(e) {
        setForm({
                ...form,
                [e.target.name]: e.target.value
            })
    }
    function handleSubmit(e) {
        e.preventDefault()
        switch (e.target.name) {
            case'restaurants':
                setRestaurants([...restaurants, form.restaurants])
            case 'attractions':
                setAttractions([...attractions, form.attractions])
            case 'hotels':
                setHotels([...restaurants, form.restaurants])
        }

        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                restaurants: form.restaurants,
                attractions: form.attractions,
                hotels: form.hotels
            })
        })
        .then(r => r.json())
        .then(data => {updateBucketList(data)
        setForm('')})
    }

    return (
        <div className='fav-card'>
            <div className='flex-grid'>
                <div className="col main">
                    <h3>{country}, {continent}</h3>
                    <img src={flag} alt={country} />
                <form>
                    <span><label>Restaurants</label></span>
                    <input type="text" name="restaurants" value={form.restaurants} onChange={e => updateForm(e)} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                <form>
                    <span><label>Attractions</label></span>
                    <input type="text" name="attractions" value={form.attractions} onChange={e => updateForm(e)} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                <form>
                    <span><label>Hotels</label></span>
                    <input type="text" name="hotels" value={form.hotels} onChange={e => updateForm(e)} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                </div>
                <div className='flex-grid'>
                    <div className='col'>
                        <strong><em>Restaurants</em></strong>
                        <ul>
                            {restaurants.map((r,i) => <li key={i}>{r}</li>)}
                            <li>add restaurants...</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <strong><em>Attractions</em></strong>
                        <ul>
                        {attractions.map((a,i) => <li key={i}>{a}</li>)}
                            <li>add attractions...</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <strong><em>Hotels</em></strong>
                        <ul>
                            <li>add hotels...</li>
                            {restaurants.map((r,i) => <li key={i}>{r}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}