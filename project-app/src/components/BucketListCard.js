
function BucketListForm () {

}
export default function BucketListCard ({info}) {
    const {country, flag, continent} = info

    return (
        <div className='fav-card'>
            <div className="flex-grid">
                <div className="col main">
                    <h1>{country}, {continent}</h1>
                    <img src={flag} alt={country} />
                </div>
                <div className="col"><strong><em>Restaurants</em></strong></div>
                <div className="col"><strong><em>Attractions</em></strong></div>
                <div className="col"><strong><em>Hotels</em></strong></div>
            </div>
        </div>
    )
}